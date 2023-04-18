const formEl = document.querySelector(".login-form");
const useremailEl = document.querySelector('[type="email"]');
const passwordEl = document.querySelector('[type="password"]');

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = {
    email: useremailEl.value,
    pass: passwordEl.value,
  };
  if (useremailEl.value === "" || passwordEl.value === "") {
    return alert("Заповніть всі поля будь-ласка!");
  }
    
  console.log(elements);
  formEl.reset();
});