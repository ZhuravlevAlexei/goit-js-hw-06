const myInput = document.querySelector("#validation-input");
const lengthRestriction = Number(myInput.dataset.length);

function onBlur(evt) {
  if (myInput.value.length === lengthRestriction) {
    if (myInput.classList.contains("invalid")) {
      myInput.classList.remove("invalid");
    }

    myInput.classList.add("valid");
  } else {
    if (myInput.classList.contains("valid")) {
      myInput.classList.remove("valid");
    }
    myInput.classList.add("invalid");
  }
  console.log(myInput.classList);
}

myInput.addEventListener("blur", onBlur);
