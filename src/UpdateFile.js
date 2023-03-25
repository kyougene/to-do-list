export default function (array) {
    const fileUl = document.querySelector('.file-list');

    while (fileUl.firstChild){
        fileUl.firstChild.remove();
    }

    array.forEach((object)=> {
        const fileLi = document.createElement('li');
        fileLi.textContent = `${object.name}`;
    })
}