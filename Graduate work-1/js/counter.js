export const counter = () => {
  const counters = document.querySelectorAll(".product__card-counter");

  if (!counters.length) return;

  const MIN = 1;
  const MAX = 10;

  counters.forEach((counter) => {
    const minus = counter.querySelector(".counter-btn--minus");
    const plus = counter.querySelector(".counter-btn--plus");
    const valueElement = counter.querySelector(".product__card-count");

    if (!minus || !plus || !valueElement) return;

    let value = Number(valueElement.textContent) || MIN;

    const update = () => {
      valueElement.textContent = value;

      minus.disabled = value <= MIN;
      plus.disabled = value >= MAX;
    };

    plus.addEventListener("click", () => {
      if (value < MAX) {
        value++;
        update();
      }
    });

    minus.addEventListener("click", () => {
      if (value > MIN) {
        value--;
        update();
      }
    });

    update();
  });
};
