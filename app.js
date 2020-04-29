// script

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const button = document.querySelector('button');

// console.log(formValue)

//event listners
form.addEventListener('submit', addItem);


// add item
function addItem(e){
    e.preventDefault();

    let input = document.querySelector('#inputValue');
    let li = document.createElement('li');
    
    li.className = 'list-group-item';
    let liText = document.createTextNode(input.value);
    
    li.appendChild(liText);
    ul.appendChild(li);

    input.value = '';    
}


// store inputs in local storage
let itemsArray = [];

// set the localstorage to access items in json format
localStorage.setItem('items', JSON.stringify(itemArray));

// get data back from the localstorage
const data = JSON.parse(localStorage.getItem('items'));