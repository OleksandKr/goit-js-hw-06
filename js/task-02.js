const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

const addClassAndText = [];

ingredients.forEach(ingredient => {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = ingredient;
  
  addClassAndText.push(newItem);
});

ingredientsEl.append(...addClassAndText);
