const form = document.querySelector(".login-form");

function onSubmit(evt) {
  evt.preventDefault();

  if (!form.password.value || !form.email.value) {
    alert("Заповніть всі поля форми!");
  } else {
    // const {
    //   elements: { email, password },
    // } = evt.currentTarget;

    const elms = evt.currentTarget.elements;
    const email = elms.email.value;
    const password = elms.password.value;

    const regDataObject = { email, password };
    console.log(regDataObject);
    //console.dir(evt.currentTarget.elements);

    form.reset();
  }
}

form.addEventListener("submit", onSubmit);
