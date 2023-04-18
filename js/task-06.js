const inputEl = document.querySelector("#validation-input");
inputEl.addEventListener("blur", onInputBlur);
const textLength = inputEl.getAttribute("data-length");

function onInputBlur(event) {
  inputEl.classList.remove("valid", "invalid");
    const el =
      event.currentTarget.value.trim().length === Number(textLength)
        ? "valid"
      : "invalid";
  
  inputEl.classList.add(el);
};






// const inputText = document.getElementById("validation-input");
// inputText.addEventListener("blur", addBorderColor);
// const dataLength = inputText.getAttribute("data-length");
// function addBorderColor(event) {
//   const valueLength = event.target.value.trim().length;
//   if (Number(dataLength) === valueLength) {
//   updateClassEl("valid", "invalid");
//   } else {
//   updateClassEl("invalid", "valid");
//   }
// }

// function updateClassEl(a, b) {
// inputText.classList.add(a);
// inputText.classList.remove(b);
// }
