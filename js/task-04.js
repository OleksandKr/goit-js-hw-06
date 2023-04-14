// const counterEl = document.querySelector("#counter");
// console.log(counterEl);

const counterValue = 0;

const buttonDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
console.log(buttonDecrementEl);

buttonDecrementEl.addEventListener('click', () => {
    console.log('---')
});




const buttonIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
console.log(buttonIncrementEl);

buttonIncrementEl.addEventListener('click', () => {
    console.log('+++')

});


const spanEl = document.querySelector('#value');
console.log(spanEl);

counterValue = spanEl;