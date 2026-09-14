export function slider() {
  const slider = document.querySelector(".slider");
  const track = slider.querySelector(".slider__list");
  const allCards = [...slider.querySelectorAll(".product__card")];
  const prevBtn = slider.querySelector(".slider-button--prev");
  const nextBtn = slider.querySelector(".slider-button--next");
  const current = slider.querySelector(".slider__current");
  const total = slider.querySelector(".slider__total");

  let currentSlide = 0;

  const getCardsPerSlide = () => (window.innerWidth <= 768 ? 4 : 6);

  const buildSlides = (cards) => {
    const cardsPerSlide = getCardsPerSlide();
    track.innerHTML = "";
    cards.forEach((card, index) => {
      if (index % cardsPerSlide === 0) {
        const slide = document.createElement("div");
        slide.classList.add("slider__page");

        const cardsContainer = document.createElement("div");
        cardsContainer.classList.add("product__cards");

        slide.append(cardsContainer);
        track.append(slide);
      }
      track.lastElementChild.querySelector(".product__cards").append(card);
    });
    return buildSlides;
  };

  const updateSlider = () => {
    const slides = track.querySelectorAll(".slider__page");
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    current.textContent = currentSlide + 1;
    total.textContent = slides.length;
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;
  };

  nextBtn.addEventListener("click", () => {
    const slides = track.querySelectorAll(".slider__page");
    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  if (allCards.length) {
    buildSlides(allCards);
    updateSlider();
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (!allCards.length) return;
      const oldSlide = currentSlide;
      buildSlides(allCards);
      const slides = track.querySelectorAll(".slider__page");
      currentSlide = Math.min(oldSlide, slides.length - 1);
      updateSlider();
    }, 200);
  });
  return buildSlides;
}
