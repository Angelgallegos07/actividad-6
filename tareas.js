document.getElementById("addTask").addEventListener("click", async () => {
    const taskText = document.getElementById("taskInput").value;
    if (!taskText) return;

    const newTask = { title: taskText, completed: false };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            body: JSON.stringify(newTask),
            headers: { "Content-Type": "application/json" }
        });
        const data = await response.json();
        addTaskToDOM(data);
        saveTaskLocal(data);
    } catch (error) {
        console.error("Error al agregar tarea:", error);
    }
});

function addTaskToDOM(task) {
    const taskList = document.getElementById("taskList");
    const li = document.createElement("li");
    li.innerHTML = `${task.title} <button class="delete">X</button>`;
    taskList.appendChild(li);

    li.querySelector(".delete").addEventListener("click", () => {
        li.remove();
        removeTaskLocal(task.id);
    });
}

function saveTaskLocal(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function removeTaskLocal(taskId) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t.id !== taskId);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

window.addEventListener("load", () => {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(addTaskToDOM);
});
