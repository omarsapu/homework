export const news = () => {
  const moreBtn = document.querySelector("#more__button");
  const newsHidden = document.querySelectorAll(".news__item--hidden");

  moreBtn.addEventListener("click", () => {
    newsHidden.forEach((item) => {
      item.classList.toggle("news__item--hidden");
    });

    moreBtn.classList.toggle("active");

    moreBtn.querySelector("span").innerText = moreBtn.classList.contains(
      "active",
    )
      ? "Скрыть"
      : "Показать еще";
  });
};
