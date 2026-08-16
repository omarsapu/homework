// import HeaderFixed from "./header.js";
// import BurgerMenu from "./burger.js";
// import Modal from "./modal.js";
// import { productSlider } from "./product-slider.js";
// import { sizes } from "./sizes.js";
// import { filter } from "./filter.js";

// try {
//   console.log("try начал работу");

//   const headerFixed = new HeaderFixed({
//     HEADER: "header",
//     HEADER_FIXED: "header--fixed",
//   });

//   new BurgerMenu(
//     {
//       BURGER: "burger",
//       BURGER_OPEN: "burger--open",
//       HEADER_MENU: "header__menu",
//       HEADER_MENU_OPEN: "header__menu--open",
//       lABEL: {
//         OPEN: "Открыть меню",
//         CLOSE: "Закрыть меню",
//       },
//       PAGE_BODY: "page__body",
//       PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
//       MENU_LINK: "header__link",
//       BREAKPOINT: 992,
//       MAIN: "main",
//     },
//     headerFixed,
//   );

//   new Modal({
//     PAGE_BODY: "page__body",
//     PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
//   });

//   productSlider();
//   sizes();

//   console.log("до фильтра");

//   filter();

//   console.log("после фильтра");
// } catch (error) {
//   console.error(error);
// }

import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";

import { productSlider } from "./product-slider.js";
import { sizes } from "./sizes.js";
import { filter } from "./filter.js";
import { counter } from "./counter.js";
import { slider } from "./slider.js";
import { about } from "./about.js";
import { news } from "./news.js";
import { tags } from "./tags.js";

try {
  const headerFixed = new HeaderFixed({
    header: "header",
    fixedClass: "header--fixed",
  });

  new BurgerMenu(
    {
      burger: "burger",
      burgerOpen: "burger--open",

      menu: "header__menu",
      menuOpen: "header__menu--open",

      pageBody: "page__body",
      noScroll: "page__body--no-scroll",

      menuLink: "header__link",

      breakpoint: 992,

      labels: {
        open: "Открыть меню",
        close: "Закрыть меню",
      },
    },
    headerFixed,
  );

  productSlider();
  sizes();
  filter();
  counter();
  slider();
  about();
  news();
  tags();

  console.log("Все скрипты запущены");
} catch (error) {
  console.error("Ошибка:", error);
}
