export const cart = () => {
  const cartBtn = document.querySelector(".header__bag");
  const cartMenu = document.querySelector(".cart");

  const cart = [];

  const productsCard = document.querySelectorAll(".product__card");

  const renderCart = () => {
    cartMenu.querySelectorAll(".cart__item").forEach((item) => {
      item.remove();
    });
    cart.forEach((product) => {
      const cartItem = `
       <li class="cart__item">

              <div class="cart__wrapper">
                <div class="cart__container">
                  <picture class="cart__images">
                   
                    <img
                      width="100"
                      height="100"
                      src="${product.image}"
                      alt=""
                      class="cart__img"
                    />
                  </picture>

                  <div class="cart__counter">
                    <button
                      class="card__counter-btn counter-btn--remove"
                      type="button"
                    >
                      <svg class="product__card-icon" width="18" height="1">
                        <use href="./icons/speaker-sprit.svg#minus"></use>
                      </svg>
                    </button>

                    <span class="card__count-text text-regular">${product.quantity}</span>

                    <button
                      class="card__counter-btn counter-btn--add"
                      type="button"
                    >
                      <svg class="product__card-icon" width="18" height="18">
                        <use href="./icons/speaker-sprit.svg#plus"></use>
                      </svg>
                    </button>
                  </div>
                </div>

                <div class="cart__content">
                  <h4 class="cart__name">
                    ${product.name}
                  </h4>

                  <span class="cart__price">${product.price * product.quantity}</span>
                </div>
              </div>

              <button
                class="cart__remove"
                type="button"
                aria-label="Удалить товар"
              >
                <svg class="cart__cross" width="18" height="18">
                  <use href="./icons/header-sprite.svg#cross"></use>
                </svg>
              </button>
            </li>
      `;

      const template = document.createElement("template");
      template.innerHTML = cartItem;

      const elementLi = template.content.firstElementChild;

      const item = elementLi.querySelector(".cart__counter");
      const removeBtn = item.querySelector(".counter-btn--remove");
      const addBtn = item.querySelector(".counter-btn--add");
      const counterText = item.querySelector(".card__count-text");
      const priceText = elementLi.querySelector(".cart__price");

      removeBtn.disabled = true;

      removeBtn.addEventListener("click", () => {
        let currentValue = parseInt(counterText.textContent);
        if (product.quantity > 1) {
          product.quantity--;
          counterText.textContent = product.quantity;
          priceText.textContent = product.price * product.quantity;
          addBtn.disabled = false;
          if (product.quantity <= 1) {
            removeBtn.disabled = true;
          }
        }
      });

      addBtn.addEventListener("click", () => {
        let currentValue = parseInt(counterText.textContent);
        if (currentValue < 9) {
          product.quantity++;
          counterText.textContent = product.quantity;
          priceText.textContent = product.price * product.quantity;
          removeBtn.disabled = false;
          if (product.quantity === 9) {
            addBtn.disabled = true;
          }
        }
      });

      cartMenu.prepend(elementLi);
    });
  };

  productsCard.forEach((card, item) => {
    const productBtn = card.querySelector(".product__card-button");
    const productName = card.querySelector(".product__card-title");
    const productImage = card.querySelector(".product__card-img");

    const product = {
      id: item + 1,
      name: productName.textContent.trim(),
      price: Number(card.dataset.price),
      image: productImage.getAttribute("src"),
      quantity: 1,
    };

    productBtn.addEventListener("click", () => {
      const existingProduct = cart.find((product) => product.id === item + 1);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push(product);
      }

      renderCart();
    });
  });

  cartBtn.addEventListener("click", () => {
    cartMenu.classList.toggle("cart__open");
  });
};
