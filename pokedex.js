document.getElementById("searchBtn").addEventListener("click", async () => {
    const pokemon = document.getElementById("pokemonName").value.toLowerCase();
    const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;

    try {
        const response = await fetch(URL);
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        console.error("Error al obtener el Pokémon:", error);
    }
});

function displayPokemon(pokemon) {
    const info = document.getElementById("pokemonInfo");
    info.innerHTML = `
        <h2>${pokemon.name.toUpperCase()}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Peso: ${pokemon.weight} kg</p>
        <p>Altura: ${pokemon.height} m</p>
        <p>Habilidades: ${pokemon.abilities.map(a => a.ability.name).join(", ")}</p>
    `;
}
