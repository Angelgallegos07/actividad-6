const API_KEY = "TU_API_KEY"; // Reemplaza con tu clave de API

async function fetchMovie(title) {
    const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&t=${encodeURIComponent(title)}`;
    try {
        const response = await fetch(URL);
        const data = await response.json();
        return data.Response === "True" ? data : null;
    } catch (error) {
        console.error("Error al buscar la película:", error);
        return null;
    }
}

document.getElementById("searchBtn").addEventListener("click", async () => {
    let movieName = document.getElementById("movieSearch").value.trim();

    // Si no se escribe nada, por defecto se mostrará "Toy Story"
    if (!movieName) {
        movieName = "Toy Story";
    }

    const movie = await fetchMovie(movieName);
    const movieContainer = document.getElementById("movieContainer");

    if (movie) {
        movieContainer.innerHTML = generateMovieCard(movie);
    } else {
        movieContainer.innerHTML = "<p>No se encontró la película.</p>";
    }
});

// Función para generar el HTML de la película encontrada
function generateMovieCard(movie) {
    return `
        <div class="movie-card">
            <h3>${movie.Title} (${movie.Year})</h3>
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/250"}" alt="${movie.Title}">
            <p><strong>Género:</strong> ${movie.Genre}</p>
            <p><strong>Director:</strong> ${movie.Director}</p>
            <p><strong>Actores:</strong> ${movie.Actors}</p>
            <p><strong>IMDb:</strong> ${movie.imdbRating}</p>
        </div>
    `;
}
