const categorieslistEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${categorieslistEl.length}`);

categorieslistEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
});
