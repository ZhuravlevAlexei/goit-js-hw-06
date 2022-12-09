const categories = document.querySelector("#categories");
const categoriesList = categories.querySelectorAll(".item");
const catQty = categoriesList.length;

console.log(`Number of categories ${catQty}`);
console.log("");

categoriesList.forEach((elm, idx) => {
  const headSecond = elm.querySelector("h2");
  const liList = elm.querySelectorAll("li");
  console.log(`Category:  ${headSecond.textContent}`);
  console.log(`Elements: ${liList.length}`);
  if (idx < catQty - 1) {
    console.log("");
  }
});
