const myInput = document.querySelector("#font-size-control");
const myText = document.querySelector("#text");
let curInputValue = myInput.value;

function onInput(evt) {
  myText.style.fontSize = `${myInput.value}px`;
}

myInput.addEventListener("input", onInput);
