import createTaskObject from './TaskObjectFactoryFunction.js';
import updateTask from './UpdateTask.js';

let taskArray = [];
export { taskArray };

export default function () {
    const addTaskButton = document.querySelector('.add-task-button');
    const formContainer = document.querySelector('.form-container');
    const form = document.querySelector('.form');
    const cancelButton = document.querySelector('#cancel-button');
    const addButton = document.querySelector('#add-button');
    const taskList = document.querySelector('.task-list');
    
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
        updateTask(taskArray);
    })

    cancelButton.addEventListener('click', ()=>{
        form.reset();
        formContainer.classList.remove('show');
    })

    taskList.addEventListener('click', (e)=>{
        if (e.target.classList.contains('todo-delete')){
            const taskItem = e.target.closest('li');
            const index = taskItem.dataset.index;
            taskArray.splice(index, 1);
            updateTask(taskArray);
        }
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