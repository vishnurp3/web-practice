const apiKey = "";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();

    if (!city) {
        displayError("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("City not found. Please check the city name.");
        }

        const data = await response.json();

        displayWeather(data);
    } catch (error) {
        displayError(error.message);
    }
}

function displayWeather(data) {
    const { name: city, main: { temp: temperature }, weather } = data;
    const description = weather[0].description;

    document.getElementById("weatherDisplay").innerHTML = `
    <h2>Weather in ${city}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Description: ${description}</p>
  `;
}

function displayError(message) {
    document.getElementById("weatherDisplay").innerHTML = `<p class="error">${message}</p>`;
}
