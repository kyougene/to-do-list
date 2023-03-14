//loading the default and add a file buttons to the file bar 
export default function () {
    const fileBar = document.querySelector('.file-bar');

    const fileList = document.createElement('ul');
    fileList.setAttribute('class', 'file-list');
    fileBar.appendChild(fileList);

    const addAFileButton = document.createElement('li');
    addAFileButton.setAttribute('class', 'button-list');
    addAFileButton.innerHTML = '<button class="button">+ Add A File</button>';
    console.log(addAFileButton)
    fileList.appendChild(addAFileButton);

    const defaultButton = document.createElement('li');
    defaultButton.setAttribute('class', 'button-list');
    defaultButton.innerHTML = '<button class="button">Default</button>';
    console.log(defaultButton)
    fileList.appendChild(defaultButton);

    
}