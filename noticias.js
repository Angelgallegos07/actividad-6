document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("search");
    const searchButton = document.getElementById("searchButton");
    const newsList = document.getElementById("newsList");

    searchButton.addEventListener("click", () => {
        const query = searchInput.value.trim();
        if (query) {
            displayFakeNews(query);
        } else {
            alert("Por favor, ingresa una palabra clave para buscar noticias.");
        }
    });

    function displayFakeNews(query) {
        const fakeNews = {
            "Inteligencia artificial": {
                title: "Nueva IA revoluciona la industria tecnológica",
                description: "Un nuevo modelo de inteligencia artificial promete cambiar la forma en que interactuamos con la tecnología, ofreciendo respuestas más rápidas y precisas.",
                url: "#"
            },
            "Ciberseguridad": {
                title: "Avances en ciberseguridad protegen millones de usuarios",
                description: "Expertos han desarrollado un nuevo sistema de protección contra ataques cibernéticos, aumentando la seguridad de datos personales y financieros.",
                url: "#"
            },
            "Nuevos smartphones": {
                title: "Se filtran detalles del nuevo teléfono insignia",
                description: "El próximo smartphone de gama alta incluirá características innovadoras que sorprenderán a los usuarios.",
                url: "#"
            }
        };

        const article = fakeNews[query] || {
            title: "No se encontraron noticias relevantes",
            description: "Intenta con otra palabra clave.",
            url: "#"
        };

        newsList.innerHTML = `
            <li>
                <h2>${article.title}</h2>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Leer más</a>
            </li>
        `;
    }
});
