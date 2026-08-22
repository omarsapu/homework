
import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";

import { productSlider } from "./product-slider.js";
import { sizes } from "./sizes.js";
import { filter } from "./filter.js";
import { counter } from "./counter.js";
import { slider } from "./slider.js";
import { about } from "./about.js";
import { photos } from "./photos.js";
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
  photos();
  news();
  tags();

  console.log("Все скрипты запущены");
} catch (error) {
  console.error("Ошибка:", error);
}
