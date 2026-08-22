export const about = () => {
  const section = document.querySelector(".about");

  if (!section) return;

  const button = section.querySelector(".more__btn");
  const hiddenItems = section.querySelectorAll(".about__item--hidden");
  const icon = button?.querySelector(".more__svg");

  if (!button || !hiddenItems.length) return;

  let isOpen = false;

  button.addEventListener("click", () => {
    isOpen = !isOpen;

    hiddenItems.forEach((item) => {
      item.classList.toggle("about__item--hidden", !isOpen);
    });

    button.firstChild.textContent = isOpen ? "Скрыть" : "Показать еще";

    if (icon) {
      icon.style.display = isOpen ? "none" : "block";
    }
  });
};
