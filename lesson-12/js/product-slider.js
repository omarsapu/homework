export const sizesSlider = () => {
  new Swiper(".sizes__slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    mousewheel: {
      forceToAxis: true,
    },
    navigation: {
      prevEl: ".sizes__slider-button--prev",
      nextEl: ".sizes__slider-button--next",
    },
  });
};

