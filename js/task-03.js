const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgList = document.querySelector(".gallery");
imgList.style.listStyle = "none";
imgList.style.display = "flex";
imgList.style.flexDirection = "column";
imgList.style.justifyContent = "center";
imgList.style.alignItems = "center";
imgList.style.gap = "10px";

const galMarkup = images
  .map(
    ({ url, alt }) => `<li class = "js-img-tab">
  <img src="${url}" alt="${alt}" width = "480" ">
  </li>`
  )
  .join("");

imgList.insertAdjacentHTML("beforeend", galMarkup);

const imageTabs = document.querySelectorAll(".js-img-tab");
console.dir(imageTabs);
imageTabs.forEach((element) => {
  element.style.border = "2px solid red";
});
