const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value.trim() === "" || password.value.trim() === "") {
    return alert("Заповніть всі поля будь-ласка!");
  }
  const userForm = { email: email.value, password: password.value };
  console.log(userForm);
  event.target.reset();
});
