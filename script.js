async function getWeather(){

const city = document.getElementById("city").value;
const apiKey = "YOUR_API_KEY";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

document.getElementById("loading").innerText="Loading...";

try{

const response = await fetch(url);

if(!response.ok){
throw new Error("City not found");
}

const data = await response.json();

document.getElementById("loading").innerText="";

document.getElementById("temp").innerText =
data.main.temp + " °C";

document.getElementById("condition").innerText =
data.weather[0].description;

document.getElementById("humidity").innerText =
"Humidity : " + data.main.humidity + "%";

document.getElementById("icon").src =
"https://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";

}
catch(error){

document.getElementById("loading").innerText =
"❌ City not found";

document.getElementById("temp").innerText="";
document.getElementById("condition").innerText="";
document.getElementById("humidity").innerText="";
document.getElementById("icon").src="";
}
}