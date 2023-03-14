export default function () {
    const container = document.querySelector('.container')
    const header = document.createElement('header');
    header.setAttribute('class', 'header');
    header.innerHTML = '<h1>To Do List</h1>';
    container.appendChild(header);

    const mainContent = document.createElement('div');
    mainContent.setAttribute('class', 'main-content');
    container.appendChild(mainContent);
}