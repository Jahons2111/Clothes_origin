let id = new URLSearchParams(window.location.search).get("id");

let find = products.find((el) => {
  return el.id == id;
});

let filter = products.filter((el) => el.id != id);

let eldiv = document.querySelector(".product-div");

eldiv.innerHTML += `
       <div class="product-details__wrapper">
              <div class="product-details__gallery">
                <div class="gallery-thumbs">
                  <img
                    class="gallery-thumbs__img"
                    src="${find.img}"
                    alt="T-shirt thumb 1"
                  />
                  <img
                    class="gallery-thumbs__img"
                    src="${find.img}"
                    alt="T-shirt thumb 2"
                  />
                  <img
                    class="gallery-thumbs__img"
                    src="${find.img}"
                    alt="T-shirt thumb 3"
                  />
                </div>
                <div class="gallery-main">
                  <img src="${find.img}" alt="Main T-shirt" />
                </div>
              </div>
              <div class="product-details__info">
                <h1 class="product-title">${find.title}</h1>
                <div class="product-rating">
                  <img src="image/ball-icon.svg" alt="star" />
                  <span class="rating-value">${find.rating}</span>
                </div>
                <div class="product-price">
                  <span class="current-price">$${find.price}</span>
                  <span class="old-price">$${find.oldPrice}</span>
                  <span class="discount">$${find.discount}</span>
                </div>
                <p class="product-desc">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
                <div class="product-colors">
                <div>
                <h4>Select Colors</h4>
                </div>
                <div>
                  <button
                    class="color-btn selected"
                    style="background: #5b6146"
                  ></button>
                  <button
                    class="color-btn"
                    style="background: #23262f"
                  ></button>
                  <button
                    class="color-btn"
                    style="background: #373a53"
                  ></button>
                  </div>
                </div>
                <div class="product-sizes">

                  <span>Choose Size</span>
                  <div class="sizes-div">
                  <button class="size-btn">Small</button>
                  <button class="size-btn">Medium</button>
                  <button class="size-btn selected">Large</button>
                  <button class="size-btn">X-Large</button>
                  </div>
                </div>
                <div class="product-quantity-cart">
                  <div class="quantity-selector">
                    <button class="qty-btn">-</button>
                    <span class="qty-value">1</span>
                    <button class="qty-btn">+</button>
                  </div>
                  <button class="add-to-cart-btn">Add to Cart</button>
                </div>
              </div>
            </div>
 `;

let ellist = document.querySelector(".arrival__toplist");

filter.forEach((el) => {
  ellist.innerHTML += `
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
                  <h4 class="arrival__peice">$${el.price}</h4>
                </a>
              </li>
    `;
});
