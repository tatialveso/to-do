const todoInput = document.querySelector('.todoInput');

const todoBtn = document.querySelector('.todoBtn');
todoBtn.addEventListener("click", addTodo);

function addTodo(event) {
  event.preventDefault();

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  todoInput.value = "";
  newTodo.classList.add("todoItem");
  todoDiv.appendChild(newTodo);

  const completedBtn = document.createElement("button");
  completedBtn.innerHTML = '<i class="fas fa-check"></i>';
  completedBtn.classList.add("completedBtn");
  todoDiv.appendChild(completedBtn);

  const trashBtn = document.createElement("button");
  trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
  trashBtn.classList.add("trashBtn");
  todoDiv.appendChild(trashBtn);

  todoList.appendChild(todoDiv);
}

const todoList = document.querySelector('.todoList');
todoList.addEventListener("click", deleteCheck);

function deleteCheck(e) {
  const item = e.target;

  if(item.classList[0] === 'trashBtn') {
    const todo = item.parentElement;
    todo.classList.add("fall");
    todo.addEventListener('transitionend', function() {
      todo.remove();
    });
  }

  if(item.classList[0] === 'completedBtn') {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}