import createTaskObject from './TaskObjectFactoryFunction.js';
import updateTask from './UpdateTask.js';
import createFile from './FileObjectFactoryFunction.js';
import updateFile from './updateFile.js'

const taskArray = [];
const fileArray = [];
export { taskArray };
export { fileArray };

export default function () {
    const addTaskButton = document.querySelector('.add-task-button');
    const formContainer = document.querySelector('.form-container');
    const form = document.querySelector('.form');
    const addButton = document.querySelector('#add-button');
    const taskList = document.querySelector('.task-list');
    const addFileButton = document.getElementById('add-file-button');
    const defaultButton = document.getElementById('default-button');
    
    
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
        const formattedDueDate = taskDueDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        const task = createTaskObject(taskName, formattedDueDate);
        form.reset();
        formContainer.classList.remove('show');
        taskArray.push(task);
        updateTask(taskArray);
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
    //complete or un-complete button functionality
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
    //closing the form when outside the form is clicked
    document.addEventListener('click', (e)=>{
        if (!form.contains(e.target) && !formContainer.contains(e.target) && !addTaskButton.contains(e.target)) {
            form.reset();
            formContainer.classList.remove('show');
         }
    });

    addFileButton.addEventListener('click', ()=>{
        const div = document.createElement('div');
        div.setAttribute('class', 'add-file-container');
        div.innerHTML = "<input type='text' name='addFileInput' id='addFileInput' placeholder='Enter File Name'> <button type='submit' id='appendFile'>Add</button> <button id='cancelFile'>Cancel</button>";
        addFileButton.parentNode.replaceChild(div, addFileButton);

        const cancelFileButton = document.getElementById('cancelFile');
        cancelFileButton.addEventListener('click', ()=>{
            div.parentNode.replaceChild(addFileButton, div);
        })

        const appendFileButton = document.getElementById('appendFile');
        appendFileButton.addEventListener('click', ()=>{
            const fileName = document.getElementById('addFileInput').value;
            const newFile = createFile(fileName);
            fileArray.push(newFile);
            updateFile(fileArray);
            div.parentNode.replaceChild(addFileButton, div);
        })
        
    })

    



}