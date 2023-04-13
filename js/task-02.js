const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients');

ingredients.forEach(ingredient => {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.textContent = ingredient;
  ingredientsEl.append(newItem);
});

console.log(ingredientsEl);