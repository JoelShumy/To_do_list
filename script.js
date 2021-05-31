let userTask = document.getElementById('task_name');
let taskList = document.getElementById('tasks__list');
let tasks = document.getElementsByTagName('li');
let buttons = document.getElementsByTagName('BUTTON');


function removeItem(element){
    const itemToRemove = element.parentElement;
    itemToRemove.remove();
}

function taskDone(element){
    const itemDone = element.parentElement;
    if(itemDone.classList.contains('done') == true){
        itemDone.classList.remove('done');
    } else {
    itemDone.classList.add('done');
    }
}

  // create a task with an <li> element
function createTask () {
    const taskChamp = document.getElementById('task_name');
    let taskValue = document.getElementById('task_name').value;
    let newTask = document.createElement('li');

    if (taskValue.length >= 2) {
    newTask.innerHTML = taskValue + "<button onclick='taskDone(this)'>DONE</button>" + "<button onclick='removeItem(this)'>DELETE</button>" ;
    // creatTaskButtons(newTask);

    taskList.appendChild(newTask)
    } else {
        alert("The task must be 2 caracters minimum");
    }
}


let submitButton = document.getElementById('submit_button');
let clearButton =  document.getElementById('clear_button');

// delete ALL the tasks
function deleteTasks() {
    while (taskList.hasChildNodes()) {
        taskList.removeChild(taskList.firstChild);
    }
};


submitButton.addEventListener('click',createTask);
clearButton.addEventListener('click',deleteTasks);
