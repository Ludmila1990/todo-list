const addBtn = document.querySelector('.main-btn__add-btn');
const clearBtn = document.querySelector('.main-btn__clear-btn');
const input = document.querySelector('.main-input');
const list = document.querySelector('.main-list');

const clearTaskList = () => list.innerHTML = '';

const addTask = () => {
  
  const task = input.value;

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('main-btn__delete-btn');
  deleteBtn.textContent = 'Удалить';
  
  const itemList = document.createElement('li');
  itemList.classList.add('main-item');
  itemList.textContent = task;
  
  deleteBtn.addEventListener('click', () => {
    list.removeChild(itemList);    
  });

  itemList.appendChild(deleteBtn);
  list.appendChild(itemList);

  input.value = '';
}

addBtn.addEventListener('click', addTask);
clearBtn.addEventListener('click', clearTaskList);
