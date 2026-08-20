export const sizes = () => {
  const list = document.querySelector('[data-sizes="list"]');

  if (!list) return;

  list.addEventListener("click", (event) => {
    const button = event.target.closest('[data-sizes="button"]');

    if (!button) return;

    const buttons = list.querySelectorAll('[data-sizes="button"]');

    buttons.forEach((item) => {
      item.classList.remove("product__sizes-button--active");
    });

    button.classList.add("product__sizes-button--active");
  });
};
