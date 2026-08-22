export const filter = () => {
  const filterElement = document.querySelector(".filter");

  if (!filterElement) return;

  const button = filterElement.querySelector(".filter__button");
  const defaultText = filterElement.querySelector(".filter__default");
  const items = filterElement.querySelectorAll(".filter__item");

  if (!button || !defaultText || !items.length) return;

  // Открытие / закрытие фильтра
  button.addEventListener("click", () => {
    filterElement.classList.toggle("filter--open");
  });

  // Сортировка карточек
  const sortCards = (slide, sortType) => {
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

    // Переставляем карточки только текущего слайда
    cards.forEach((card) => {
      cardsContainer.append(card);
    });
  };

  // Выбор фильтра
  items.forEach((item) => {
    const filterButton = item.querySelector(".filter__btn");

    if (!filterButton) return;

    filterButton.addEventListener("click", () => {
      const sortType = filterButton.dataset.sort;

      if (!sortType) return;

      // Меняем название выбранного фильтра
      defaultText.textContent = filterButton.textContent.trim();

      // Убираем active
      items.forEach((element) => {
        element.classList.remove("active-checked");
      });

      // Добавляем active выбранному
      item.classList.add("active-checked");

      // Находим текущий слайд
      const currentSlide = document.querySelector(".slider__page--active");

      // Сортируем только его
      if (currentSlide) {
        sortCards(currentSlide, sortType);
      }

      // Закрываем фильтр
      filterElement.classList.remove("filter--open");
    });
  });
};
