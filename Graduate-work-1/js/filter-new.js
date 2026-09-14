export const filter = (buildSlides) => {
  const filterItems = [...document.querySelectorAll(".filter__item")];
  const cards = [...document.querySelectorAll(".product__card")];
  let sortedCards = [...cards];

  const filterButton = document.querySelector(".filter__button");
  const filterMenu = document.querySelector(".filter__wrapper");

  filterButton.addEventListener("click", () => {
    filterMenu.classList.toggle("filter--open");
  });

  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      filterItems.forEach((filterItem) => {
        filterItem.classList.remove("active-checked");
      });
      item.classList.add("active-checked");

      sortedCards = [...cards];
      filterMenu.classList.remove("filter--open");
      const sortButton = item.querySelector(".filter__btn");
      const sortType = sortButton.dataset.sort;

      switch (sortType) {
        case "popular":
          sortedCards.sort((a, b) => {
            return (
              parseFloat(b.dataset.popular) - parseFloat(a.dataset.popular)
            );
          });
          break;

        case "cheap":
          sortedCards.sort((a, b) => {
            return parseFloat(a.dataset.price) - parseFloat(b.dataset.price);
          });
          break;

        case "expensive":
          sortedCards.sort((a, b) => {
            return parseFloat(b.dataset.price) - parseFloat(a.dataset.price);
          });
          break;

        case "new":
          sortedCards.sort((a, b) => {
            return new Date(b.dataset.date) - new Date(a.dataset.date);
          });
          break;

        case "rating":
          sortedCards.sort((a, b) => {
            return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
          });
          break;
      }

      buildSlides(sortedCards);
    });
  });
};
