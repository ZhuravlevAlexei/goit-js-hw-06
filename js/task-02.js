const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingList = document.getElementById("ingredients");

const arrayLi = [];
ingredients.forEach((elm) => {
  const newLi = document.createElement("li");
  newLi.textContent = elm;
  newLi.classList.add("item");
  arrayLi.push(newLi);
});

ingList.before(...arrayLi);
