export default function () {
    const mainContent = document.querySelector('.main-content');
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task-container');
    mainContent.appendChild(taskContainer);

    const taskTitle = document.createElement('div');
    taskTitle.setAttribute('class', 'task-title');
    taskTitle.innerHTML = '<h2 class="title">Tasks</h2>';
    taskContainer.appendChild(taskTitle);

    const addTask = document.createElement('button');
    addTask.setAttribute('class', 'add-task-button');
    addTask.innerText = '+ Add A Task';
    taskContainer.appendChild(addTask);

    const taskList = document.createElement('ul');
    taskList.setAttribute('class', 'task-list');
    taskContainer.appendChild(taskList);
}