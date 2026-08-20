export const productSlider = () => {
  const slider = document.querySelector(".product__slider");

  if (!slider) return;

  new Swiper(slider, {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,

    mousewheel: {
      forceToAxis: true,
    },

    navigation: {
      prevEl: ".product__slider-button--prev",
      nextEl: ".product__slider-button--next",
    },
  });
};
