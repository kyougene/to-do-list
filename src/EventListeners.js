import createTaskObject from './TaskObjectFactoryFunction.js';
import updateTask from './UpdateTask.js';

const taskArray = [];
export { taskArray };

export default function () {
    const addTaskButton = document.querySelector('.add-task-button');
    const formContainer = document.querySelector('.form-container');
    const form = document.querySelector('.form');
    const cancelButton = document.querySelector('#cancel-button');
    const addButton = document.querySelector('#add-button');
    const taskList = document.querySelector('.task-list');
    
    //clicking add a task will show the form for a task
    addTaskButton.addEventListener('click', () => {
        formContainer.classList.add('show');
    });
    //preventing default submit behavior on the form
    form.addEventListener('submit', (e)=> {
        e.preventDefault();
    })
    //creating task object from input values, and updating dom to display task
    addButton.addEventListener('click', ()=>{
        const taskName = form.elements['task-name'].value;
        const taskDueDate = new Date(form.elements['due-date'].value);
        const task = createTaskObject(taskName, taskDueDate);
        form.reset();
        formContainer.classList.remove('show');
        taskArray.push(task);
        updateTask(taskArray);
    })
    //cancelling and unshowing the form
    cancelButton.addEventListener('click', ()=>{
        form.reset();
        formContainer.classList.remove('show');
    })
    //event listener to delete a task
    taskList.addEventListener('click', (e)=>{
        if (e.target.classList.contains('todo-delete')){
            const taskItem = e.target.closest('li');
            const index = taskItem.dataset.index;
            taskArray.splice(index, 1);
            updateTask(taskArray);
        }
    })
    
    taskList.addEventListener('click', (e)=>{
        const completeButton = e.target.closest('.todo-complete');
        if (completeButton) {
            const taskItem = completeButton.closest('li');
            const index = taskItem.dataset.index;
            const task = taskArray[index];
            task.completed = !(task.completed);
            if (task.completed){
                taskItem.classList.add('completed');
            }
            else {
                taskItem.classList.remove('completed');
            }
        }
    })
}