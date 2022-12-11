const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");
const divControls = document.querySelector("#controls");
const dataInput = divControls.firstElementChild;
const divBoxes = document.querySelector("#boxes");
const size = 30;

divBoxes.style.display = "flex";
divBoxes.style.flexWrap = "wrap";
divBoxes.style.justifyContent = "center";
divBoxes.style.alignItems = "center";
divBoxes.style.gap = "10px";
// divBoxes.style.width = "50px";
// divBoxes.style.height = "50px";
// divBoxes.style.backgroundColor = "black";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function createBoxes(evt) {
  destroyBoxes();
  let curSize = size;
  const amount = dataInput.value;

  const arrayDivs = [];
  const emptyChild = document.createElement("div");
  divBoxes.appendChild(emptyChild);

  for (let idx = 1; idx <= amount; idx += 1) {
    let newEl = document.createElement("div");
    newEl.style.width = `${curSize}px`;
    newEl.style.height = `${curSize}px`;
    newEl.style.backgroundColor = getRandomHexColor();
    arrayDivs.push(newEl);
    curSize += 10;
  }
  emptyChild.before(...arrayDivs);
}

function destroyBoxes(evt) {
  divBoxes.innerHTML = "";
}

createButton.addEventListener("click", createBoxes);

destroyButton.addEventListener("click", destroyBoxes);

//console.log(divBoxes);
