import { taskArray } from "./EventListeners.js";

export default function ( taskArray ) {
    const taskUl = document.querySelector('.task-list');
    
    while (taskUl.firstChild) {
        taskUl.removeChild(taskUl.firstChild);
    }
    if (taskArray.length > 0){
        let counter = 0;
        taskArray.forEach((object) => {
            // new list item for a new task
            const newTaskItem = document.createElement('li');
            newTaskItem.setAttribute('class', 'task-li');
            newTaskItem.setAttribute('data-index', `${counter}`);
            taskUl.appendChild(newTaskItem);
            //complete or incomplete button for each task
            const taskComplete = document.createElement('svg');
            taskComplete.setAttribute('class', 'todo-complete');
            taskComplete.setAttribute('viewBox', '0, 0, 24, 24');
            taskComplete.innerHTML = '<use xlink:href="./svgs/checkbox-outline.svg#checkbox"></use>';
            newTaskItem.appendChild(taskComplete);
            //title of each task
            const taskTitle = document.createElement('div');
            taskTitle.setAttribute('class', 'todo-title');
            taskTitle.textContent = `${object.taskName}`;
            newTaskItem.appendChild(taskTitle);
            //task due date display
            const taskDueDate = document.createElement('div');
            taskDueDate.setAttribute('class', 'todo-dueDate');
            taskDueDate.textContent = `${object.dueDate}`;
            newTaskItem.appendChild(taskDueDate);
            //delete task  button
            const taskDelete = document.createElement('svg');
            taskDelete.setAttribute('class', 'todo-delete');
            taskDelete.setAttribute('viewBox', '0, 0, 24, 24' );
            taskDelete.innerHTML = '<use xlink:href="./svgs/trash-can.svg#trashcan"></use>';
            newTaskItem.appendChild(taskDelete);

            counter++;
        })
    }
    else {
        return;
    }
}