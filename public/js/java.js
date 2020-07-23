function printanswer(cityname)
{
  var data;
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=e30813cf68d3ddcdedc614b02b5337d1&units=metric')
  .then(response => response.json())
  .then(data => {
    document.getElementById("tempnow").innerHTML = "Temperature Now: "  + data.main.temp + "°C";
    document.getElementById("tempmax").innerHTML = "Max Temperature: " + data.main.temp_max + "°C";
    document.getElementById("tempmin").innerHTML = "Min Temperature: " + data.main.temp_min + "°C";
    document.getElementById("hum").innerHTML = "Humidity: " + data.main.humidity +"%";
    document.getElementById("desc").innerHTML =  "Describtion: " +data.weather[0].description;
  } );


}
