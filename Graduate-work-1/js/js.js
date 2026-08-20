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

// ABOUT

const photosLinks = document.querySelectorAll(".about__photos-link");

const maxPhotos = 6;
const photosPerClick = 3;

photosLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const images = link.previousElementSibling;
    const currentPhotos = images.querySelectorAll(".about__lightbox");

    if (currentPhotos.length >= maxPhotos) {
      link.style.display = "none";
      return;
    }

    for (let i = 0; i < photosPerClick; i++) {
      // Проверяем лимит
      if (images.querySelectorAll(".about__lightbox").length >= maxPhotos) {
        break;
      }

      const newPhoto = document.createElement("a");

      newPhoto.className = "about__lightbox about__lightbox--new";
      newPhoto.dataset.fslightbox = "gallery";
      newPhoto.href = "./img/about-img-large.webp";

      newPhoto.innerHTML = `
        <img
          class="about__img"
          width="95"
          height="95"
          src="./img/about-img.webp"
          alt="Фото"
        >
      `;

      images.append(newPhoto);
    }

    refreshFsLightbox();

    if (images.querySelectorAll(".about__lightbox").length >= maxPhotos) {
      link.style.display = "none";
    }
  });
});

// Filter
// const filterButtons = document.querySelectorAll(".filter__btn");
// const productsContainer = document.querySelector(".products__container");

// if (filterButtons.length && productsContainer) {
//   filterButtons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const sortType = button.dataset.sort;

//       const cards = [...productsContainer.querySelectorAll(".products__card")];

//       cards.sort((a, b) => {
//         switch (sortType) {
//           case "cheap":
//             return Number(a.dataset.price) - Number(b.dataset.price);

//           case "expensive":
//             return Number(b.dataset.price) - Number(a.dataset.price);

//           case "rating":
//             return Number(b.dataset.rating) - Number(a.dataset.rating);

//           case "popular":
//             return Number(b.dataset.popular) - Number(a.dataset.popular);

//           case "new":
//             return new Date(b.dataset.date) - new Date(a.dataset.date);

//           default:
//             return 0;
//         }
//       });

//       cards.forEach((card) => {
//         productsContainer.append(card);
//       });

//       // Активный пункт
//       document
//         .querySelector(".filter__item.active-checked")
//         ?.classList.remove("active-checked");

//       button.parentElement.classList.add("active-checked");
//     });
//   });
// }

const moreBtn = document.querySelector(".more__btn");
const hiddenNews = document.querySelectorAll(".news__item--hidden");

moreBtn.addEventListener("click", () => {
  hiddenNews.forEach((item) => {
    item.classList.remove("news__item--hidden");
  });

  moreBtn.style.display = "none";
});
