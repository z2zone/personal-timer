
const addTaskButton = document.querySelector(".add-task-button");
addTaskButton.addEventListener('click', () => addTask());
const addTask = () => {
    const singleTaskWrapper = document.createElement('span');
    const taskInput = document.createElement('input');
    taskInput.text = 'Type in your task';

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.className = 'task-delete-button';

    singleTaskWrapper.appendChild(taskInput);
    singleTaskWrapper.appendChild(deleteButton);

    const taskContainer = document.querySelector('.task-container');
    taskContainer.appendChild(singleTaskWrapper);
}
