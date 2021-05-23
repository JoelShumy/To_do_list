let userTask = document.getElementById('task_name');
let taskList = document.getElementById('tasks__list');
let tasks = document.getElementsByTagName('li');



function creatTaskButtons(list) {
    let btnDone = document.createElement("BUTTON");
    btnDone.innerHTML = "Done";
    list.appendChild(btnDone);

    let btnDelete = document.createElement("BUTTON");
    btnDelete.innerHTML = "Delete";
    list.appendChild(btnDelete);
  }



function createTask () {
    let taskValue = document.getElementById('task_name').value;
    let newTask = document.createElement('li');

    if (taskValue.length >= 2) {
    newTask.innerText = taskValue;
    creatTaskButtons(newTask);
    taskList.appendChild(newTask)
    } else {
        alert("The task must be 2 caracters minimum");
    }
}


let submitButton = document.getElementById('submit_button');
let clearButton =  document.getElementById('clear_button');


function deleteTasks() {
    while (taskList.hasChildNodes()) {
        taskList.removeChild(taskList.firstChild);
    }
};

submitButton.addEventListener('click',createTask);
clearButton.addEventListener('click',deleteTasks);