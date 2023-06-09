function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

// отримуємо доступ до необхідних елементів
const inputNumber = document.querySelector("input");
const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
// вішаємо слухача події на кнопку Create
buttonCreate.addEventListener("click", onClick);
// функція для отримання значення з інпуту,
// перевірка на відсутність значення,
// визов функціі створення боксів (div)
function onClick() {
  const value = inputNumber.value;
  if (!value) {
    return;
  }
  const markup = createMarkup(value);
  addMarkup(markup);
}
// функція створення боксів
function createMarkup(amount) {
  let fragment = "";
  let size = 30;
  for (let i = 0; i < amount; i += 1) {
    const randomColor = getRandomHexColor();
    fragment += `<div style="width:${size}px;
    height:${size}px;
    background:${randomColor}"></div>`;
    size += 10;
  }
  return fragment;
}
// функція, яка приєднує всі створені бокси
//  у div з id = "boxes"
function addMarkup(markup) {
  boxes.innerHTML = markup;
}
// вішаємо слухача події на кнопку Destroy
buttonDestroy.addEventListener("click", destroyBoxes);
// функція яка видаляє всі бокси
// у div з id = "boxes і очіщує input
function destroyBoxes() {
  inputNumber.value = "";
  boxes.innerHTML = "";
}
