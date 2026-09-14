import { burger } from "./burger-new.js";
import { tags } from "./tags-new.js";
import { slider } from "./slider-new.js";
import { filter } from "./filter-new.js";
import { counter } from "./counter-new.js";
import { about } from "./about-new.js";
import { news } from "./news-new.js";
import { cart } from "./modal-cart-new.js";

burger();
tags();
const buildSlides = slider();
filter(buildSlides);
counter();
about();
news();
cart();
