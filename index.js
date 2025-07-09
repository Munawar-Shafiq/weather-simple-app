 async function getWeather (){
const city = document.getElementById("city").value;
const resultDiv = document.getElementById("result")
if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }
 const weatherRes = await fetch(
  `https://p2pclouds.up.railway.app/v1/learn/weather?city=${city}`
 );
 const weather =await weatherRes.json();
 console.log(weather);
const currentTem = weather.current.temp_c;
resultDiv.innerHTML = `Today temperature of ${city} is ${currentTem}°C`
}


