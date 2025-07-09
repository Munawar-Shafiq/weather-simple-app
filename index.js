@@ -0,0 +1,10 @@
function getWeather (){
const city = document.getElementById("city").value;
const resultDiv = document.getElementById("result")
if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }
  resultDiv.innerHTML = `Weather info for ${city} will appear here`;

}
