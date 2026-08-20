export const filter = () => {
  const filterElement = document.querySelector(".filter");

  if (!filterElement) return;

  const button = filterElement.querySelector(".filter__button");
  const defaultText = filterElement.querySelector(".filter__default");
  const items = filterElement.querySelectorAll(".filter__item");

  // Все слайды
  const slides = document.querySelectorAll(".slider__page");

  if (!button || !defaultText || !items.length || !slides.length) return;

  // Открытие / закрытие фильтра
  button.addEventListener("click", () => {
    filterElement.classList.toggle("filter--open");
  });

  // Сортировка одного слайда
  const sortSlide = (slide, sortType) => {
    const cardsContainer = slide.querySelector(".product__cards");

    if (!cardsContainer) return;

    const cards = [...cardsContainer.querySelectorAll(".product__card")];

    cards.sort((a, b) => {
      const priceA = Number(a.dataset.price);
      const priceB = Number(b.dataset.price);

      const ratingA = Number(a.dataset.rating);
      const ratingB = Number(b.dataset.rating);

      const popularA = Number(a.dataset.popular);
      const popularB = Number(b.dataset.popular);

      const dateA = new Date(a.dataset.date);
      const dateB = new Date(b.dataset.date);

      switch (sortType) {
        case "cheap":
          return priceA - priceB;

        case "expensive":
          return priceB - priceA;

        case "rating":
          return ratingB - ratingA;

        case "new":
          return dateB - dateA;

        case "popular":
        default:
          return popularB - popularA;
      }
    });

    // Переставляем карточки внутри текущего слайда
    cards.forEach((card) => {
      cardsContainer.appendChild(card);
    });
  };

  // Выбранная сортировка
  let currentSort = "popular";

  // Применяем сортировку ко всем слайдам
  const sortAllSlides = (sortType) => {
    slides.forEach((slide) => {
      sortSlide(slide, sortType);
    });
  };

  // Выбор фильтра
  items.forEach((item) => {
    const filterButton = item.querySelector(".filter__btn");

    if (!filterButton) return;

    filterButton.addEventListener("click", () => {
      const sortType = filterButton.dataset.sort;

      if (!sortType) return;

      currentSort = sortType;

      // Меняем текст кнопки
      defaultText.textContent = filterButton.textContent.trim();

      // Убираем active у всех
      items.forEach((element) => {
        element.classList.remove("active-checked");
      });

      // Добавляем выбранному
      item.classList.add("active-checked");

      // Сортируем каждый слайд отдельно
      sortAllSlides(currentSort);

      // Закрываем фильтр
      filterElement.classList.remove("filter--open");
    });
  });

  // Начальная сортировка
  sortAllSlides(currentSort);
};