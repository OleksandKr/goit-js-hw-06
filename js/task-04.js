let counterValue = 0;

const spanEl = document.querySelector("#value");
console.log(spanEl);


const buttonDecrementEl = document.querySelector(
  'button[data-action="decrement"]'
);
console.log(buttonDecrementEl);

const buttonIncrementEl = document.querySelector(
  'button[data-action="increment"]'
);
console.log(buttonIncrementEl);



buttonDecrementEl.addEventListener("click", () => {
    console.log(counterValue);
    counterValue -= 1;
    spanEl.textContent = counterValue;
});


buttonIncrementEl.addEventListener('click', () => {
    console.log(counterValue);
    counterValue += 1;
    spanEl.textContent = counterValue;
});

