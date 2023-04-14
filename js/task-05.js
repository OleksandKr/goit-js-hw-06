const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", onInput);

function onInput(event) { 
    nameOutputEl.textContent = event.currentTarget.value.trim()
      ? event.currentTarget.value
      : "Anonymous";  
};
