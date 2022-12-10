const myInput = document.querySelector("#name-input");
const myName = document.querySelector("#name-output");

function onInput(evt) {
  myName.textContent = myInput.value;
  if (!myInput.value) {
    myName.textContent = "Anonymous";
  }
}

myInput.addEventListener("input", onInput);
