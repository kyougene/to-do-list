import './styles.css';


// loading the header and main content container for the page
import loadPage from './LoadPageHTML.js';
loadPage();

import taskItem from './CreateListItem.js';
taskItem();

const addTaskButton = document.querySelector('.add-task-button');
const formContainer = document.querySelector('.form-container');
console.log(formContainer);
console.log(addTaskButton);
addTaskButton.addEventListener('click', () => {
    formContainer.classList.add('show');
});