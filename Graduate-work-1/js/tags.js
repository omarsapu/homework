export const tags = () => {
  const tags = document.querySelector(".tags");

  if (!tags) return;

  const button = tags.querySelector(".tags__btn");
  const hiddenItems = tags.querySelectorAll(".tags__item--hidden");

  if (!button || !hiddenItems.length) return;

  button.addEventListener("click", () => {
    const isOpen = tags.classList.toggle("tags--open");

    hiddenItems.forEach((item) => {
      item.classList.toggle("tags__item--hidden", !isOpen);
    });

    button.textContent = isOpen ? "Скрыть" : "Показать еще";
  });
};
