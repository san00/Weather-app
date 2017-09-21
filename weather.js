$.getJSON("https://ipapi.co/json/", function(data) {
  var lat = data.latitude;
  var long = data.longitude;

  var apiInfo =
    "https://api.apixu.com/v1/current.json?key=043d3a0fb3e945d0a4d181246162911&q=" +
    lat +
    "," +
    long;

  $.ajax({
    url: apiInfo,
    dataType: "json",
    success: function(weather) {
      $("#location").text(weather.location.region);
      $("#temp_c").text(weather.current.temp_c);
      $("#temp_f").text(weather.current.temp_f);
      $("#feelslike").text(weather.current.feelslike_c);
      $("#weathericon").html(
        '<img src="https:' + weather.current.condition.icon + '">'
      );
      $("#weathercondtext").text(weather.current.condition.text);
      $("#time").text(weather.location.localtime);
    }
  });

  function error() {
    alert("Sorry there was an error, try again");
  }

  $("button").click(function() {
    $("#temp_c").toggle();
    $("#temp_f").toggle();
  });

  $("button").click(function() {
    $("#text_c").toggle();
    $("#text_f").toggle();
  });
});
