const rangeInputEl = document.querySelector("#font-size-control");
const textToChangeEl = document.querySelector("#text");

rangeInputEl.addEventListener("input", onRangeChange);

function onRangeChange(event) {
  textToChangeEl.style.fontSize = `${event.currentTarget.value}px`;
}
