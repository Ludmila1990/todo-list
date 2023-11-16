const addBtn = document.querySelector('.main-btn__add-btn');
const clearBtn = document.querySelector('.main-btn__clear-btn');
const input = document.querySelector('.main-input');
const list = document.querySelector('.main-list');

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

const createTask = (text) => {
  const itemList = document.createElement('li');
  itemList.textContent = text;
  list.appendChild(itemList);

  const btnItem = document.createElement('button');
  btnItem.textContent = 'Удалить';
  itemList.appendChild(btnItem);

  btnItem.addEventListener('click', () => {
    const indexToRemove = itemsArray.indexOf(text);
    if (indexToRemove !== -1) {
      itemsArray.splice(indexToRemove, 1);
      localStorage.setItem('items', JSON.stringify(itemsArray));
    }
    list.removeChild(itemList);
  });
}

addBtn.addEventListener('click', () => {
  const task = input.value;
  itemsArray.push(task);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  createTask(task);
  input.value = "";
});

data.forEach(item => {
  createTask(item);
});

clearBtn.addEventListener('click', function () {
  localStorage.clear();
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
  itemsArray = [];
});
