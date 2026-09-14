export const tags = () => {
  const tagsBtn = document.querySelector(".tags__btn");
  const tagsItem = document.querySelectorAll(".tags__item");

  tagsBtn.addEventListener("click", () => {
    const isHidden = tagsItem[4].classList.contains("tags__item--hidden");
    tagsItem.forEach((item, index) => {
      if (index >= 4) {
        if (isHidden) {
          item.classList.remove("tags__item--hidden");
        } else {
          item.classList.add("tags__item--hidden");
        }
      }
    });
    tagsBtn.textContent = isHidden ? "Скрыть" : "Показать все";
  });
};
