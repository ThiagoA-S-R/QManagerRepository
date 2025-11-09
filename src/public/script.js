const API = "/tasks";
const taskForm = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");

async function fetchTasks() {
  const res = await fetch(API);
  const tasks = await res.json();
  taskList.innerHTML = "";

  tasks.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${t.title} - ${t.description || ""} - ${t.done ? "✅" : "❌"}</span>
      <div>
        <button onclick="toggleTask(${t.id}, ${t.done})">✔</button>
        <button onclick="editTask(${t.id}, '${t.title}', '${t.description || ""}')">✏️</button>
        <button onclick="deleteTask(${t.id})">🗑️</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

taskForm.addEventListener("submit", async e => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description, done: false })
  });

  taskForm.reset();
  fetchTasks();
});

async function toggleTask(id, done) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ done: !done })
  });
  fetchTasks();
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  fetchTasks();
}

// 🟡 Função nova — editar título e descrição
async function editTask(id, currentTitle, currentDescription) {
  const newTitle = prompt("Novo título:", currentTitle);
  if (newTitle === null || newTitle.trim() === "") return;

  const newDescription = prompt("Nova descrição:", currentDescription || "");
  
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title: newTitle, description: newDescription })
  });

  fetchTasks();
}

fetchTasks();
