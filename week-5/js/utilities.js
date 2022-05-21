//add text to task list 

function displayNewTask(task) {
    let li = document.createElement("li");
    li.classList.add('A');

    let input = document.createElement("input");
    input.type = "checkbox";
    li.appendChild(input);
    
    let txt = document.createTextNode(task.text);
    li.appendChild(txt);

    let button = document.createElement("button");
    button.innerHTML = "X";
    button.addEventListener("click", function(){
        // remove
    });
    li.appendChild(button);

    let ul = document.getElementById('MYLIST');
    ul.appendChild(li);
}
// on click the button

document.getElementById("addTask").onclick = function() {
  addTodo()
  printTodos()
}

var todos = [];

// function addTodo() {
//     var inputValue = document.getElementById('todoInput').value;
//     todos.push(inputValue);
//     localStorage.setItem('todos', JSON.stringify(todos));
// }

function printTodos() {
    //var list = document.getElementById('toDoList')

    //const tasks = storage.tasks;
    todos = JSON.parse(localStorage.getItem('todos'));

    for (var i = 0; i < todos.length; i++) {
        displayNewTask(todos[i]);
    }

}
// take the text from input and save it in local storage 
// take the data from storage and  display in the task list 
//and call print to do list 
//storing list of object in alocal stoarge 

function addTodo() {
    var inputValue = document.getElementById('todoInput').value;
    const task = {
        checked: false,
        text: inputValue,
        id: Date.now()
    }    

    todos.push(task);
    localStorage.setItem('todos', JSON.stringify(todos));
}
// click on li to cross out list item
let cross = document.getElementsByClassName('checked');

for (let i = 0; i < cross.length; i++) {
  cross[i].onclick = function () {
    let div = this.parentElement;
    div.style.textDecoration = 'line-through';
    // div.id = 'complete';
  }
}
// var abc = [];
//    var get =  JSON.parse(localStorage.getItem('todos'));
//    todos = [get];
//    todos.push(todos);

//    localStorage.setItem('todos', JSON.stringify(todos));

//    console.log(JSON.stringify(todos));
//    console.log(get);
  
