let elarrivellist = document.querySelector(".arrival__list");

function domga(array, justlist) {
  justlist.innerHTML = "";
  array.forEach((el) => {
    justlist.innerHTML += `
                   <li class="arrival__item">
                <a href="./second.html?id=${el.id}" class="arrival__link">
                  <img
                    src="${el.img}"
                    alt=""
                    class="arrival__img"
                  />
                  <h4 class="arrival__subtitle">${el.title}</h4>
                  <div class="arrival__ball">
                    <img
                      src="./image/ball-icon.svg"
                      alt=""
                      class="arrival__ball-img"
                    />
                    <span class="arrival__ball-span">${el.rating}</span>
                  </div>
                  <h4 class="arrival__peice">$${el.price} <span>$${el.oldPrice}</span></h4>
                </a>
              </li>
        `;
  });
}

domga(products, elarrivellist);

let elallbtn = document.querySelector(".arrival__all-btn");
let elalllist = document.querySelector(".arrival__list");

elallbtn.onclick = () => {
  elalllist.classList.toggle("all");
};

let eltoplist = document.querySelector('.arrival__toplist')

domga(topproducts , eltoplist)