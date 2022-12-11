const mySpan = document.querySelector(".color");
const myButton = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function onButtonClick(evt) {
  const documentBody = document.body;

  const randomColor = getRandomHexColor();
  documentBody.style.backgroundColor = randomColor;
  mySpan.textContent = randomColor;
}

myButton.addEventListener("click", onButtonClick);
