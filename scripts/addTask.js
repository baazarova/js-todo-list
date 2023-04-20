const dateInput = document.querySelector(".date__input");
const nameInput = document.querySelector(".task__input");
const descInput = document.querySelector(".desc__input");

const submitBtn = document.querySelector(".add__btn");
const cancelBtn = document.querySelector(".cancel__btn");

let todoList = localStorage.getItem("items")
  ? JSON.parse(localStorage.getItem("items"))
  : [];

const newTaskAdd = function () {
  let taskData = {
    task: nameInput.value,
    date: dateInput.value,
  };

  console.log(todoList);

  todoList.push(taskData);

  localStorage.setItem("items", JSON.stringify(todoList));

  dateInput.value = "";
  descInput.value = "";
  nameInput.value = "";

  // setTimeout(() => {
  //   window.location.href = "./home.html";
  // }, 500);
  window.location.href = "./home.html";
};

let formIsValid = false;

const taskConfirm = function () {
  dateInput.valueAsDate || dateInput.focus();
  descInput.value.trim().length > 3 || descInput.focus();
  nameInput.value.trim().length > 3 || nameInput.focus();

  dateInput.valueAsDate &&
    nameInput.value.trim().length > 3 &&
    descInput.value.trim().length > 3 &&
    (formIsValid = true);

  if (formIsValid) {
    submitBtn.textContent = "Done !";
    submitBtn.setAttribute("onclick", "newTaskAdd()");
    cancelBtn.textContent = "Delete";
    cancelBtn.setAttribute("onclick", "deleteTask()");
  }
};

const deleteTask = function () {
  dateInput.value = "";
  descInput.value = "";
  nameInput.value = "";

  setTimeout(() => {
    window.location.href = "./home.html";
  }, 500);
};
