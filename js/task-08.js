const formEl = document.querySelector(".login-form");
const userEmailEl = document.querySelector('[type="email"]');
const passwordEl = document.querySelector('[type="password"]');

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const elements = {
    email: userEmailEl.value,
    pass: passwordEl.value,
  };
  if (userEmailEl.value === "" || passwordEl.value === "") {
    return alert("Заповніть всі поля будь-ласка!");
  }
    
  console.log(elements);
  formEl.reset();
});