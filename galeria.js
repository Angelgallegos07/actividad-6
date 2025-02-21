document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchBtn").addEventListener("click", fetchImage);
});

async function fetchImage() {
    const query = document.getElementById("search").value.trim();
    if (!query) {
        alert("Por favor, ingresa un nombre de personaje.");
        return;
    }

    const API_KEY = "TU_API_KEY"; // Reemplázalo con tu clave de Unsplash
    const API_URL = `https://api.unsplash.com/search/photos?query=${query}&per_page=1&client_id=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayImage(data.results[0], query);
    } catch (error) {
        console.error("Error al obtener la imagen:", error);
        document.getElementById("gallery").innerHTML = `<p>Error al cargar la imagen.</p>`;
    }
}

function displayImage(image, query) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    if (!image) {
        gallery.innerHTML = `<p>No se encontraron imágenes para "${query}". Intenta con otra descripción.</p>`;
        return;
    }

    const imgElement = document.createElement("img");
    imgElement.src = image.urls.regular;
    imgElement.alt = query;
    imgElement.classList.add("big-image");

    gallery.appendChild(imgElement);
}
