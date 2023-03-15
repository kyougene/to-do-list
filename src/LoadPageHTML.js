export default function () {
    //creating the header and main body
    const container = document.querySelector('.container')
    const header = document.createElement('header');
    header.setAttribute('class', 'header');
    header.innerHTML = '<h1>To Do List</h1>';
    container.appendChild(header);
    const mainContent = document.createElement('div');
    mainContent.setAttribute('class', 'main-content');
    container.appendChild(mainContent);


    //creating the file bar
    const fileBar = document.createElement('div');
    fileBar.setAttribute('class', 'file-bar');
    mainContent.appendChild(fileBar);
    //creating list of files
    const fileList = document.createElement('ul');
    fileList.setAttribute('class', 'file-list');
    fileBar.appendChild(fileList);
    //creating the add a file button, as a list item under the file list
    const addAFileButton = document.createElement('li');
    addAFileButton.setAttribute('class', 'button-list');
    addAFileButton.innerHTML = '<button class="button">+ Add A File</button>';
    fileList.appendChild(addAFileButton);
    //creating the default file, also as a listem item under the file list
    const defaultButton = document.createElement('li');
    defaultButton.setAttribute('class', 'button-list');
    defaultButton.innerHTML = '<button class="button">Default</button>';
    fileList.appendChild(defaultButton);
   

    //creating the task container for task content
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task-container');
    mainContent.appendChild(taskContainer);
    //creating the title for task container
    const taskContainerTitle = document.createElement('div');
    taskContainerTitle.setAttribute('class', 'task-title');
    taskContainerTitle.innerHTML = '<h2 class="title">Tasks</h2>';
    taskContainer.appendChild(taskContainerTitle);
    //add task button
    const addTask = document.createElement('button');
    addTask.setAttribute('class', 'add-task-button');
    addTask.innerText = '+ Add A Task';
    taskContainer.appendChild(addTask);
    //task list ul
    const taskList = document.createElement('ul');
    taskList.setAttribute('class', 'task-list');
    taskContainer.appendChild(taskList);

    
    //creating the add a task form
    const formContainer = document.createElement('div');
    formContainer.setAttribute('class', 'form-container');
    container.appendChild(formContainer);
    
    const formTitle = document.createElement('h2');
    formTitle.setAttribute('id', 'form-title');
    formTitle.innerText = 'Add A Task';
    formContainer.appendChild(formTitle);
    
    const form = document.createElement('form');
    form.setAttribute('class', 'form');
    formContainer.appendChild(form);
    
    const taskLabel = document.createElement('label');
    taskLabel.setAttribute('for', 'task-name');
    taskLabel.innerText = 'Task Name:';
    form.appendChild(taskLabel);
    
    const taskName = document.createElement('input');
    taskName.setAttribute('type', 'text');
    taskName.setAttribute('id', 'task-name');
    taskName.setAttribute('name', 'task-name')
    taskName.setAttribute('placeholder', 'Enter Task Name');
    form.appendChild(taskName);
    
    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due-date');
    dueDateLabel.innerText = 'Due Date:';
    form.appendChild(dueDateLabel);
    
    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('id', 'due-date');
    dueDate.setAttribute('name', 'due-date');
    form.appendChild(dueDate);
    
    const addButton = document.createElement('button');
    addButton.setAttribute('type', 'submit');
    addButton.setAttribute('id', 'add-button');
    addButton.innerText = 'Add Task';
    form.appendChild(addButton);
    
    const cancelButton = document.createElement('button');
    cancelButton.setAttribute('id', 'cancel-button');
    cancelButton.innerText = 'Cancel';
    form.appendChild(cancelButton);
}