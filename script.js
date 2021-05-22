let userTask = document.getElementById('task_name');
let taskList = document.getElementById('tasks__list');
let tasks = document.getElementsByTagName('li');

function createTask () {
    let taskValue = document.getElementById('task_name').value;
    let newTask = document.createElement('li');
    newTask.innerText = taskValue;
    
taskList.appendChild(newTask)
}


let submitButton = document.getElementById('submit_button');
let clearButton =  document.getElementById('clear_button');


function deleteTasks() {
    taskList.removeChild(tasks);
}

submitButton.addEventListener('click',createTask);
clearButton.addEventListener('click',deleteTasks);