export const news = () => {
  const section = document.querySelector(".news");

  if (!section) return;

  const button = section.querySelector(".more__btn");
  const hiddenItems = section.querySelectorAll(".news__item--hidden");

  if (!button || !hiddenItems.length) return;

  let isOpen = false;

  button.addEventListener("click", () => {
    isOpen = !isOpen;

    hiddenItems.forEach((item) => {
      item.classList.toggle("news__item--hidden", !isOpen);
    });

    button.textContent = isOpen ? "Скрыть" : "Показать еще";
  });
};
