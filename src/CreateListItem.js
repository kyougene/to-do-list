export default function () {
    const taskUl = document.querySelector('.task-list');

    const newTaskItem = document.createElement('li');
    newTaskItem.setAttribute('class', 'task-li');
    taskUl.appendChild(newTaskItem);

    const taskComplete = document.createElement('svg');
    taskComplete.setAttribute('class', 'todo-complete');
    taskComplete.setAttribute('viewBox', '0, 0, 24, 24');
    taskComplete.innerHTML = '<use xlink:href="./svgs/checkbox-outline.svg#checkbox"></use>';
    newTaskItem.appendChild(taskComplete);

    const taskTitle = document.createElement('div');
    taskTitle.setAttribute('class', 'todo-title');
    taskTitle.innerText = 'Title'
    newTaskItem.appendChild(taskTitle);

    const taskDueDate = document.createElement('div');
    taskDueDate.setAttribute('class', 'todo-dueDate');
    taskDueDate.innerText = 'placeholder';
    newTaskItem.appendChild(taskDueDate);

    const taskDelete = document.createElement('svg');
    taskDelete.setAttribute('class', 'todo-delete');
    taskDelete.setAttribute('viewBox', '0, 0, 24, 24' );
    taskDelete.innerHTML = '<use xlink:href="./svgs/trash-can.svg#trashcan"></use>';
    newTaskItem.appendChild(taskDelete);
}