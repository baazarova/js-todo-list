const todoList = document.querySelector(".todo__list");
const todoCheck = document.querySelector(".todo__check");

let taskList = JSON.parse(localStorage.getItem("items"));

const renderGoals = function () {
  for (let task of taskList) {
    todoList.innerHTML += `
      <li class="todo__item">
        <input onclick=${removeItem} type="checkbox" class="todo__check" />
        <p class="todo__itemDate">${task.date}</p>
        <p class="todo__itemTask">${task.task}</p>
      </li>
    `;
  }
};

renderGoals();

const totalTodos = document.querySelector(".total__todos");

totalTodos.textContent = `${taskList.length} ${
  taskList.length > 1 ? "todos" : "todo"
}`;

// todoCheck.addEventListener("click", (e)=>{
//   removeItem()
// })

function removeItem(e) {
  todoCheck.checked && localStorage.removeItem("items");
}
