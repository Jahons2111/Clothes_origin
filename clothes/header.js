let elburger = document.querySelector(".header__burger");
let elburgerbtn = document.querySelector(".header__burger-btn");

elburgerbtn.onclick = () => {
  elburger.classList.toggle("block");
};