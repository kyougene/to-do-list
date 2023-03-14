//creating and loading the file bar, used for maintaing separate to-do files
export default function () {
    const mainContent = document.querySelector('.main-content');

    const fileBar = document.createElement('div');
    fileBar.setAttribute('class', 'file-bar');
    mainContent.appendChild(fileBar);
}