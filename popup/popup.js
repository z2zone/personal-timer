
let taskList = [];
const addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener('click', () => addTask());

chrome.storage.sync.get(['taskList'], (res) => {
    console.log(res.taskList);
});

const saveTasks = () => {
    chrome.storage.sync.set({
        taskList: taskList
    });
}

const reRender = () => {
    const taskContainer = document.querySelector('.task-container');
    taskContainer.innerHTML = '';
    taskList.forEach(element => {
        taskContainer.appendChild(element);
    });
}

const deleteTask = (wrapperID) => {
    taskList.forEach((element, index) => {
        if(element.id === wrapperID){
            taskList.splice(index, 1);
        }
    });
    reRender();
}

const addTask = () => {
    const singleTaskWrapper = document.createElement('span');
    const wrapperID = new Date().getTime().toString();
    singleTaskWrapper.id = wrapperID;

    const taskInput = document.createElement('input');
    taskInput.placeholder = 'Type in your task';
    taskInput.value = '';

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.className = 'task-delete-button';
    deleteButton.addEventListener('click', ()=>{
        deleteTask(wrapperID);
    })

    singleTaskWrapper.appendChild(taskInput);
    singleTaskWrapper.appendChild(deleteButton);

    taskList.push(singleTaskWrapper);
    reRender();
}