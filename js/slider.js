export function slider() {
  const track = document.querySelector(".slider__list");
  const slides = document.querySelectorAll(".slider__page");

  const prevBtn = document.querySelector(".slider-button--prev");
  const nextBtn = document.querySelector(".slider-button--next");

  const current = document.querySelector(".slider__current");
  const total = document.querySelector(".slider__total");

  if (!track || !slides.length || !prevBtn || !nextBtn) return;

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
}
