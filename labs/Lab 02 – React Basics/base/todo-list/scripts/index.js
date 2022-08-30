let todos = [];

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.todos) {
        todos = JSON.parse(localStorage.todos);
        updateTodoHTML();
    }

    document
        .querySelector("#add-todo")
        .addEventListener("click", addTodo);

    document
        .querySelector("#clear-todos")
        .addEventListener("click", clearTodos);
});

function addTodo() {
    const newTitle = document.querySelector("#todo-input").value;
    if (!newTitle) {
        return;
    }
    if (todos.find(todo => todo.title === newTitle)) {
        return;
    }

    const newTodo = {
        title: newTitle,
        done: false,
    };

    document.querySelector("#todo-input").value = "";
    todos.push(newTodo);
    localStorage.todos = JSON.stringify(todos);
    updateTodoHTML();
}

function clearTodos() {
    todos = [];
    localStorage.todos = JSON.stringify(todos);
    updateTodoHTML();
}

function updateTodoHTML() {
    document.querySelector("#todolist-container").innerHTML =
    todos.map(todo => `
    <div>
        <div><p>${todo.title}</p></div>
        <input type="checkbox" ${todo.done ? "checked" : ""} onclick="checkTodo()" />
        <i class="fa fa-trash" id="delete-todo" onclick="deleteTodo()"></i>
    </div>`).join("");
}

function checkTodo() {
    const todoTitle = event.target.parentElement.children[0].children[0].innerText;
    let todo = todos.find(todo => todo.title === todoTitle);
    todo.done = !todo.done;
    localStorage.todos = JSON.stringify(todos);
}

function deleteTodo() {
    const todoTitle = event.target.parentElement.children[0].children[0].innerText;
    todos = todos.filter(todo => todo.title !== todoTitle);
    localStorage.todos = JSON.stringify(todos);
    updateTodoHTML();
}
