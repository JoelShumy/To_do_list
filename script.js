let userTask = document.getElementById('task_name');
let taskList = document.getElementById('tasks__list');
let tasks = document.getElementsByTagName('li');
let buttonDone = document.getElementsByClassName('done');
let buttonDelete = document.getElementsByClassName('delete');

// create button done and delete when creating à task
function creatTaskButtons(list) {
    let btnArray = ['Delete', 'Done']
    for (let i = 0; i < btnArray.length; i++) {

        let btn = document.createElement("BUTTON");
        btn.innerHTML = btnArray[i];
        list.appendChild(btn);
    }
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
