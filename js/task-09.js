function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorSpanEl = document.querySelector(".color");
const changeColorBtnEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");

changeColorBtnEl.addEventListener("click", () => {

colorSpanEl.textContent = getRandomHexColor();
bodyEl.style.backgroundColor = colorSpanEl.textContent;
});