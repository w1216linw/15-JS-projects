// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn');
// edit option
let editElement;
let editFlag = false;
let editId = '';
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener('submit', submit);

clearBtn.addEventListener('click', clearItems);

window.addEventListener('DOMContentLoaded', loadUpItem);
// ****** FUNCTIONS **********
/* load Up items in the local storage */
function loadUpItem() {
  let items = getLocalStorage();
  
  if(items.length > 0){
    items.forEach(function(item) {
      addItem(item.id, item.value);
    })
    container.classList.add('show-grocery');
  }

}

/* submit item  */
function submit(e) {
  e.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if(value && !editFlag) {
    addItem(id, value);
    renderItem();
    renderAlert("Item insert succeed", "alert-succeed");
    addToLocalStorage(id, value);
  } else if(value && editFlag) {
    editElement.textContent = value;
    renderAlert("Edited succeed", "alert-succeed");
    editLocalStorage(editId, value);
  } else {
    renderAlert("Please enter a value", "alert-failed");
  }
  setBackToDefault();
}

/* render alert */
function renderAlert(text, type) {
  alert.classList.add(type);
  alert.textContent = text;

  //remove alert
  setTimeout(() => {
    alert.textContent = '';
    alert.classList.remove(type);
  }, 1000);
}

/* render item */
function renderItem() {
  container.classList.add('show-grocery');
}

/* add item into list */
function addItem(id, value) {
  const elem = document.createElement('article');
  // add class
  elem.classList.add('grocery-item');
  //add id
  const attr = document.createAttribute('data-id');
  attr.value = id;
  elem.setAttributeNode(attr);
  elem.innerHTML = `
          <p class="title">${value}</p>
          <div class="btn-container">
            <button class="edit-btn"><i class="fas fa-edit"></i></button>
            <button class="delete-btn"><i class="fas fa-trash"></i></button>
          </div>
  `;
  const deleteBtn = elem.querySelector('.delete-btn');
  const editBtn = elem.querySelector('.edit-btn');
  deleteBtn.addEventListener('click', deleteItem);
  editBtn.addEventListener('click', editItem);
  list.appendChild(elem);
}

/* set input box to default */
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editId = '';
  submitBtn.textContent = 'submit';
}

/* clear items */
function clearItems() {
  const items = document.querySelectorAll('.grocery-item');

  if(items.length > 0) {
    items.forEach(function(item) {
      list.removeChild(item);
    });
  }

  container.classList.remove('show-grocery');
  renderAlert('List cleared', 'alert-succeed');
  setBackToDefault();
  localStorage.removeItem('list');
}

/* delete item */
function deleteItem(e) {
  const elem = e.currentTarget.parentElement.parentElement;
  const id = elem.dataset.id;
  list.removeChild(elem);

  if(list.children.length === 0) {
    container.classList.remove('show-grocery');
  }
  
  renderAlert('item removed', 'alert-succeed');
  setBackToDefault();
  removeFromLocalStorage(id);
}

/* edit item */
function editItem(e) {
  const elem = e.currentTarget.parentElement.parentElement;
  editElement = e.currentTarget.parentElement.previousElementSibling;;
  grocery.value = editElement.innerHTML;
  editFlag = true;
  editId = elem.dataset.id;
  submitBtn.textContent = 'save';
}
// ****** LOCAL STORAGE **********
/* add an item to local storage */
function addToLocalStorage(id, value) {
  const grocery = {id, value}
  let items = getLocalStorage();
  items.push(grocery);
  localStorage.setItem('list', JSON.stringify(items));
}

/* remove an item from local storage */
function removeFromLocalStorage(id) {
  let items = getLocalStorage();

  items = items.filter(function(item) {
    
    if(item.id !== id) {
      return item;
    }
    
  })
  
  localStorage.setItem('list', JSON.stringify(items));
}

/* edit select item in the local storage */
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function(item) {

    if(item.id === id) {
      item.value = value;
    }
    return item;
  })

  localStorage.setItem('list', JSON.stringify(items));
}

/* check if there is item in local storage */
function getLocalStorage() {
  return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')) :[];
}
// ****** SETUP ITEMS **********