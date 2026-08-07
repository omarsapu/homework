import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";
import Modal from "./modal.js";
import { productSlider } from "./product-slider.js";
import { sizes } from "./sizes.js";
// import { filter } from "./filter.js";

try {
  console.log("try начал работу");

  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "header__menu",
      HEADER_MENU_OPEN: "header__menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "header__link",
      BREAKPOINT: 992,
      MAIN: "main",
    },
    headerFixed,
  );

  // new Modal({
  //   PAGE_BODY: "page__body",
  //   PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  // });

  productSlider();
  sizes();

  console.log("до фильтра");

  filter();

  console.log("после фильтра");
} catch (error) {
  console.error(error);
}
