export const counter = () => {
  const counterItems = document.querySelectorAll(".product__card-counter");

  counterItems.forEach((counterItem) => {
    const removeBtn = counterItem.querySelector(".counter-btn--minus");
    const addBtn = counterItem.querySelector(".counter-btn--plus");
    const counterText = counterItem.querySelector(".product__card-count");

    removeBtn.disabled = true;

    removeBtn.addEventListener("click", () => {
      let currentValue = parseInt(counterText.textContent);
      if (currentValue > 1) {
        currentValue--;
        counterText.textContent = currentValue;
        addBtn.disabled = false;
        if (currentValue <= 1) {
          removeBtn.disabled = true;
        }
      }
    });

    addBtn.addEventListener("click", () => {
      let currentValue = parseInt(counterText.textContent);
      if (currentValue < 10) {
        currentValue++;
        counterText.textContent = currentValue;
        removeBtn.disabled = false;
        if (currentValue >= 10) {
          addBtn.disabled = true;
        }
      }
    });
  });
};
