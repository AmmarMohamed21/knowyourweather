function printanswer(cityname)
{
  var data;
 fetch('https://api.openweathermap.org/data/2.5/weather?q='+cityname.value+'&appid=e30813cf68d3ddcdedc614b02b5337d1&units=metric')
  .then(response => response.json())
  .then(data => {
    document.getElementById("result").innerHTML = data.main.temp;
    document.getElementById("result").innerHTML = document.getElementById("result").innerHTML + "<br>"+data.weather[0].description;

  } );


}
