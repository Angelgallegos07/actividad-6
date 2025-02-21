document.getElementById("searchBtn").addEventListener("click", async () => {
    const movieName = document.getElementById("movieSearch").value;
    const API_KEY = "TU_API_KEY";
    const URL = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${movieName}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        displayMovies(data.Search);
    } catch (error) {
        console.error("Error al buscar películas:", error);
    }
});

function displayMovies(movies) {
    const movieList = document.getElementById("movieList");
    movieList.innerHTML = "";

    movies.forEach(movie => {
        const movieItem = document.createElement("li");
        movieItem.innerHTML = `
            <h3>${movie.Title} (${movie.Year})</h3>
            <img src="${movie.Poster}" alt="${movie.Title}">
        `;
        movieList.appendChild(movieItem);
    });
}
