document.addEventListener("DOMContentLoaded", () => {
    const userList = document.getElementById("user-list");
    const searchInput = document.getElementById("search");

    async function fetchUsers() {
        try {
            const response = await fetch("https://randomuser.me/api/?results=10");
            const data = await response.json();
            displayUsers(data.results);
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
        }
    }

    function displayUsers(users) {
        userList.innerHTML = "";
        users.forEach((user, index) => {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${index + 1}.</span>
                <img src="${user.picture.thumbnail}" alt="Foto de ${user.name.first}">
                <span>${user.name.first} ${user.name.last}</span>
                <span>${user.email}</span>
            `;
            userList.appendChild(listItem);
        });
    }

    searchInput.addEventListener("input", (e) => {
        const filter = e.target.value.toLowerCase();
        const users = document.querySelectorAll("li");
        users.forEach(user => {
            user.style.display = user.textContent.toLowerCase().includes(filter) ? "flex" : "none";
        });
    });

    fetchUsers();
});
