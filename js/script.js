const addBtn = document.querySelector('.main-btn__add-btn');
const clearBtn = document.querySelector('.main-btn__clear-btn');
const input = document.querySelector('.main-input');
const list = document.querySelector('.todo-list');
let tasks = localStorage.getItem('tasks') ? localStorage.getItem('tasks') : '';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const updateStorage = () => {
  tasks = list.innerHTML;
  localStorage.setItem('tasks', tasks);
};

const createTask = (text) => {
  const randomId = getRandomInt(1, 1000);
  const itemList = document.createElement('li');
  const btnItem = document.createElement('img');

  itemList.classList.add('todo-item');
  itemList.textContent = text;
  list.appendChild(itemList);

  btnItem.src = './icons/basket.svg';
  btnItem.alt = 'Delete';
  btnItem.classList.add('btn-item__delete');
  btnItem.style.width = '20px';
  btnItem.style.height = '20px';
  
  itemList.appendChild(btnItem);

  list.appendChild(itemList);
}

addBtn.addEventListener('click', () => {
  const task = input.value.trim();
  if (task !== "") {
    createTask(task);
    input.value = "";
    updateStorage();
  }
});

list.addEventListener('click', (evt) => {
  if (evt.target.tagName === 'LI') {
    const listItem = evt.target;
    if (listItem.classList.contains('checked')) {
      listItem.classList.remove('checked');
    } else {
      listItem.classList.add('checked');
    }
    updateStorage();
  } else if (evt.target.tagName === 'IMG') {
    evt.target.style.transform = 'scale(1.5)';
    let div = evt.target.parentNode;
    div.remove();
    updateStorage();
  }
}, false);

clearBtn.addEventListener('click', function () {
  const items = document.querySelectorAll('.todo-item');
  let checkedItemsExist = false;

  items.forEach((item) => {
    if (item.classList.contains('checked')) {
      item.remove();
      updateStorage();
      checkedItemsExist = true;
    }
  });

  if (!checkedItemsExist) {
    localStorage.clear();
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }
  }
});

if (localStorage.getItem('tasks')) {
  list.innerHTML = localStorage.getItem('tasks');
}