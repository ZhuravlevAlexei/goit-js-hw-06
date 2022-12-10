let counterValue = 0;

const buttonDecr = document.querySelector('[data-action="decrement"]');
const buttonIncr = document.querySelector('[data-action="increment"]');
const showRes = document.querySelector("#value");

function onDerement(evt) {
  counterValue -= 1;
  showRes.textContent = counterValue;
}

function onIncrement(evt) {
  counterValue += 1;
  showRes.textContent = counterValue;
}

buttonDecr.addEventListener("click", onDerement);
buttonIncr.addEventListener("click", onIncrement);
