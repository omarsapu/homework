export const burger = () => {
  const burgerBtn = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".menu");
  const body = document.querySelector(".page__body");

  burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle("burger--open");
    burgerMenu.classList.toggle("header__menu--open");
    body.classList.toggle("page__body--no-scroll");
  });

  const closeMenu = () => {
    burgerBtn.classList.remove("burger--open");
    burgerMenu.classList.remove("header__menu--open");
    body.classList.remove("page__body--no-scroll");
  };

  burgerMenu.addEventListener("click", (event) => {
    if (event.target.closest(".menu__link") || event.target.closest(".menu")) {
      closeMenu();
    }
  });

  document.addEventListener('click', (event) =>{
    if (!event.target.closest('.burger') && !event.target.closest('.menu')) {
      closeMenu();
    }
  })
};
