document.getElementById("search").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    getEstimatedWeather(city);
});

function getEstimatedWeather(city) {
    const estimatedWeather = {
        "Hermosillo": { temp: "30°C", condition: "Soleado" },
        "Ciudad de Mexico": { temp: "20°C", condition: "Nublado" },
        "Guadalajara": { temp: "25°C", condition: "Parcialmente nublado" },
        "Monterrey": { temp: "28°C", condition: "Soleado" },
        "Cancun": { temp: "27°C", condition: "Lluvia ligera" }
    };

    const weather = estimatedWeather[city] || { temp: "N/A", condition: "Desconocido" };
    document.getElementById("weather-result").innerHTML = `
        <h2>${city}</h2>
        <p>🌡️ Temperatura: ${weather.temp}</p>
        <p>☁️ Condición: ${weather.condition}</p>
    `;
}
