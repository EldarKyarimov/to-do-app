const inputText = document.querySelector('#myInput');
const addButton = document.querySelector('#addBtn');
const list = document.querySelector('#myUl');

function createTask(e) {
    if (inputText.value != '') {
        e.preventDefault();
        // create Li
        const myLi = document.createElement('li');
        myLi.innerHTML = inputText.value;
        list.appendChild(myLi);
        // delete button
        const dltButton = document.createElement('button');
        dltButton.innerHTML = 'X';
        dltButton.className = 'dltBtn'
        myLi.appendChild(dltButton);
        // done button
    }
    const li = document.querySelectorAll('li');
    for (let i = 0; i < li.length; i++) {
        li[i].addEventListener('dblclick', function () {
            li[i].classList = 'checked';
        })
    }


    const close = document.querySelectorAll('li > button');
    for (let i = 0; i < close.length; i++) {
        close[i].addEventListener('click', function () {
            close[i].parentElement.style.display = 'none';
            close[i].parentElement.remove();
        })
    }
    inputText.value = '';
}

addButton.addEventListener('click', createTask);


function oneClick() {

}