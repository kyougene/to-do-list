import createTaskObject from './TaskObjectFactoryFunction.js'

export default function () {
    const addTaskButton = document.querySelector('.add-task-button');
    const formContainer = document.querySelector('.form-container');
    addTaskButton.addEventListener('click', () => {
        formContainer.classList.add('show');
    });

    const form = document.querySelector('.form');
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
        const taskName = form.elements['task-name'].value;
        const taskDueDate = new Date(form.elements['due-date'].value);
        const task = createTaskObject(taskName, taskDueDate);
        form.reset();
        formContainer.classList.remove('show');
    })
}