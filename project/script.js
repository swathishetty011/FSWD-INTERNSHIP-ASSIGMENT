async function getWeather() {

    const city = document.getElementById("city").value;
    const apiKey = "YOUR_API_KEY"; 

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    document.getElementById("loading").innerText = "Loading...";

    try {

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        document.getElementById("loading").innerText = "";

        document.getElementById("temp").innerText =
            "Temperature: " + data.main.temp + " °C";

        document.getElementById("condition").innerText =
            "Weather: " + data.weather[0].description;

        document.getElementById("humidity").innerText =
            "Humidity: " + data.main.humidity + "%";

    } catch (error) {

        document.getElementById("loading").innerText =
            "Error: Unable to fetch weather data";

        document.getElementById("temp").innerText = "";
        document.getElementById("condition").innerText = "";
        document.getElementById("humidity").innerText = "";
    }
}