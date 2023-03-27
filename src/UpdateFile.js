export default function (array) {
    const fileUl = document.querySelector('.file-list');

    while (fileUl.firstChild){
        fileUl.firstChild.remove();
    }

    let counter = 0;

    array.forEach((object)=> {
        const fileLi = document.createElement('li');
        fileLi.setAttribute('class', 'file-name');
        fileLi.innerHTML = `<button id='file-name-button' data-index='${counter}'>${object.name}</button>`;
        fileUl.appendChild(fileLi);
        counter++;
    })
}