import createTaskObject from './TaskObjectFactoryFunction.js';
import CreateListItem from './CreateListItem.js';

let taskArray = [];
export { taskArray };

export default function () {
    const addTaskButton = document.querySelector('.add-task-button');
    const formContainer = document.querySelector('.form-container');
    const form = document.querySelector('.form');
    const cancelButton = document.querySelector('#cancel-button');
    const addButton = document.querySelector('#add-button');
    
    addTaskButton.addEventListener('click', () => {
        formContainer.classList.add('show');
    });

    form.addEventListener('submit', (e)=> {
        e.preventDefault();
    })

    addButton.addEventListener('click', ()=>{
        const taskName = form.elements['task-name'].value;
        const taskDueDate = new Date(form.elements['due-date'].value);
        const task = createTaskObject(taskName, taskDueDate);
        form.reset();
        formContainer.classList.remove('show');
        taskArray.push(task);
        CreateListItem(taskArray);
    })

    cancelButton.addEventListener('click', ()=>{
        form.reset();
        formContainer.classList.remove('show');
    })

    // document.addEventListener('click', (e) => {
    //     if (formContainer.classList.contains('show')) {
    //         if (!formContainer.contains(e.target)) {
    //             form.reset();
    //             formContainer.classList.remove('show');
    //         }
    //     }
    // });


}