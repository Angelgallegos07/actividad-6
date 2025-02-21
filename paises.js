document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchBtn").addEventListener("click", fetchCountryInfo);
});

async function fetchCountryInfo() {
    const country = document.getElementById("countryInput").value.trim();
    if (!country) {
        alert("Por favor, ingrese un país.");
        return;
    }

    const API_URL = `https://restcountries.com/v3.1/name/${country}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayCountryInfo(data[0]);
    } catch (error) {
        console.error("Error al obtener la información:", error);
        document.getElementById("countryInfo").innerHTML = `<p>⚠️ No se encontró información del país.</p>`;
    }
}

function displayCountryInfo(country) {
    if (!country) {
        document.getElementById("countryInfo").innerHTML = `<p>⚠️ País no encontrado.</p>`;
        return;
    }

    const countryInfo = document.getElementById("countryInfo");
    countryInfo.innerHTML = `
        <h2>${country.name.common} (${country.cca2})</h2>
        <p>🌍 Región: ${country.region}</p>
        <p>🏛️ Capital: ${country.capital ? country.capital[0] : "No disponible"}</p>
        <p>🗣️ Idiomas: ${Object.values(country.languages || {}).join(", ")}</p>
        <p>💰 Moneda: ${Object.values(country.currencies || {}).map(c => c.name).join(", ")}</p>
        <img class="flag" src="${country.flags.svg}" alt="Bandera de ${country.name.common}">
    `;
}
