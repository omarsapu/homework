const filter = document.querySelector(".filter");

if (filter) {
  const button = filter.querySelector(".filter__button");
  const items = filter.querySelectorAll(".filter__item");

  button.addEventListener("click", () => {
    filter.classList.toggle("filter--open");
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      const value = button.querySelector(".filter__default");

      value.textContent = item.textContent;

      filter.classList.remove("filter--open");
    });
  });
}

// Active-checked
const value = document.querySelector(".filter__default");
const items = document.querySelectorAll(".filter__item");

items.forEach((item) => {
  item.addEventListener("click", () => {
    value.textContent = item.textContent;

    items.forEach((el) => {
      el.classList.remove("active-checked");
    });

    item.classList.add("active-checked");
  });
});

// SPEAKER
const MIN_COUNT = 1;
const MAX_COUNT = 10;

const counters = document.querySelectorAll(".product__card-counter");

counters.forEach((counter) => {
  const minusBtn = counter.querySelector(".counter-btn--minus");
  const plusBtn = counter.querySelector(".counter-btn--plus");
  const count = counter.querySelector(".product__card-count");

  let value = Number(count.textContent);

  function updateCounter() {
    count.textContent = value;

    // Кнопка "-"
    minusBtn.disabled = value <= MIN_COUNT;

    // Кнопка "+"
    plusBtn.disabled = value >= MAX_COUNT;
  }

  plusBtn.addEventListener("click", () => {
    if (value < MAX_COUNT) {
      value++;
      updateCounter();
    }
  });

  minusBtn.addEventListener("click", () => {
    if (value > MIN_COUNT) {
      value--;
      updateCounter();
    }
  });

  updateCounter();
});

// Slider
const track = document.querySelector(".slider__list");
const slides = document.querySelectorAll(".slider__page");

const prevBtn = document.querySelector(".slider-button--prev");
const nextBtn = document.querySelector(".slider-button--next");

const current = document.querySelector(".slider__current");
const total = document.querySelector(".slider__total");
console.log(track);
console.log(slides.length);
console.log(prevBtn);
console.log(nextBtn);

let currentSlide = 0;

total.textContent = slides.length;

function updateSlider() {
  track.style.transform = `translateX(-${currentSlide * 100}%)`;

  current.textContent = currentSlide + 1;

  prevBtn.disabled = currentSlide === 0;
  nextBtn.disabled = currentSlide === slides.length - 1;
}

nextBtn.addEventListener("click", () => {
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

updateSlider();
