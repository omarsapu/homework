export function slider() {
  const slider = document.querySelector(".slider");

  if (!slider) return;

  const track = slider.querySelector(".slider__list");
  const prevBtn = slider.querySelector(".slider-button--prev");
  const nextBtn = slider.querySelector(".slider-button--next");
  const current = slider.querySelector(".slider__current");
  const total = slider.querySelector(".slider__total");

  if (!track || !prevBtn || !nextBtn || !current || !total) return;

  let currentSlide = 0;

  const getCardsPerSlide = () => {
    return window.innerWidth <= 768 ? 4 : 6;
  };

  // Получаем все карточки один раз
  const getAllCards = () => {
    return [...slider.querySelectorAll(".product__card")];
  };

  // Создаём слайды
  const buildSlides = (cards) => {
    const cardsPerSlide = getCardsPerSlide();

    track.innerHTML = "";

    for (let i = 0; i < cards.length; i += cardsPerSlide) {
      const slide = document.createElement("div");
      const cardsContainer = document.createElement("div");

      slide.classList.add("slider__page");
      cardsContainer.classList.add("product__cards");

      cards.slice(i, i + cardsPerSlide).forEach((card) => {
        cardsContainer.append(card);
      });

      slide.append(cardsContainer);
      track.append(slide);
    }

    updateSlider();
  };

  // Обновление слайдера
  const updateSlider = () => {
    const slides = track.querySelectorAll(".slider__page");

    if (!slides.length) return;

    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    current.textContent = currentSlide + 1;
    total.textContent = slides.length;

    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === slides.length - 1;

    // Помечаем активный слайд
    slides.forEach((slide, index) => {
      slide.classList.toggle(
        "slider__page--active",
        index === currentSlide,
      );
    });
  };

  // Следующий слайд
  nextBtn.addEventListener("click", () => {
    const slides = track.querySelectorAll(".slider__page");

    if (currentSlide < slides.length - 1) {
      currentSlide++;
      updateSlider();
    }
  });

  // Предыдущий слайд
  prevBtn.addEventListener("click", () => {
    if (currentSlide > 0) {
      currentSlide--;
      updateSlider();
    }
  });

  // Первоначальное создание слайдов
  const cards = getAllCards();

  if (cards.length) {
    buildSlides(cards);
  }

  // При изменении ширины экрана
  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      const cards = getAllCards();

      if (!cards.length) return;

      const oldSlide = currentSlide;

      buildSlides(cards);

      const slides = track.querySelectorAll(".slider__page");

      currentSlide = Math.min(oldSlide, slides.length - 1);

      updateSlider();
    }, 200);
  });
}