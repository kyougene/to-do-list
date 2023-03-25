export default function (array) {
    const fileUl = document.querySelector('.file-list');

    while (fileUl.firstChild){
        fileUl.firstChild.remove();
    }

    array.forEach((object)=> {
        const fileLi = document.createElement('li');
        fileLi.setAttribute('class', 'file-name');
        fileLi.innerHTML = `<button id='file-name-button'>${object.name}</button>`;
        fileUl.appendChild(fileLi);
    })
}