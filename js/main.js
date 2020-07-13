let createButton = document.getElementById("todoCreator");
let cleanButton = document.getElementById("todoCleaner");
let markButton = document.getElementById("todoMarker");
let eraseButton = document.getElementById("todoEraser");

createButton.addEventListener('click', createTodo);
cleanButton.addEventListener('click', cleanTodos);
markButton.addEventListener('click', markTodos);
eraseButton.addEventListener('click', eraseTodos);

function createTodo(e){
    e.preventDefault();
    // obtener valor de la caja
    var todoText = document.getElementById("todoText").value;
    var list = document.getElementById("todoContainer");

    let currentListHTML = list.innerHTML;
    list.innerHTML = currentListHTML + '<input type = "checkbox" name="todo">' + todoText + '<br>'; 

}

function cleanTodos(e){
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    todos.forEach(todo => todo.checked = false);
}

function markTodos(e){
    e.preventDefault();
    var todos = document.getElementsByName("todo");
    todos.forEach(todo => todo.checked = true);
}

function eraseTodos(e){
    var list = document.getElementById("todoContainer");
    list.innerHTML = "";
}

let textField = document.getElementById("todoText");