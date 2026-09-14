export const about = () => {
  const aboutBtn = document.querySelectorAll(".about__photos-link");
  const moreBtn = document.querySelector(".more__btn");
  const aboutHidden = document.querySelectorAll(".about__item--hidden");

  const aboutHtml = `
  <a
    data-fslightbox="gallery"
    class="about__lightbox"
    href="./img/about-img-large.webp">
    <picture>
      <source srcset="./img/about-img.webp" type="image/webp" />
      <img
        class="about__img"
        width="95"
        height="95"
        src="./img/about-img.png"
        alt="Фото"/>
    </picture>
  </a>

   <a
    data-fslightbox="gallery"
    class="about__lightbox"
    href="./img/about-img-large.webp">
    <picture>
      <source srcset="./img/about-img.webp" type="image/webp" />
      <img
        class="about__img"
        width="95"
        height="95"
        src="./img/about-img.png"
        alt="Фото"/>
    </picture>
  </a>

   <a
    data-fslightbox="gallery"
    class="about__lightbox"
    href="./img/about-img-large.webp">
    <picture>
      <source srcset="./img/about-img.webp" type="image/webp" />
      <img
        class="about__img"
        width="95"
        height="95"
        src="./img/about-img.png"
        alt="Фото"/>
    </picture>
  </a>
  `;

  aboutBtn.forEach((btn) => {
    const aboutContent = btn.closest(".about__content");
    const aboutImg = aboutContent.querySelector(".about__content-images");
    const defaultImgCount = aboutImg.children.length;

    btn.addEventListener("click", () => {
      const template = document.createElement("template");
      const addImg = aboutImg.children.length;

      if (addImg <= 3) {
        template.innerHTML = aboutHtml;
        const card = template.content.children;
        aboutImg.append(...card);
        btn.innerText = "Скрыть";
        return;
      } else if (addImg > 3) {
        const cards = [...aboutImg.children].slice(defaultImgCount);
        cards.forEach((card) => {
          card.remove();
        });
        btn.innerText = "Смотреть все фото";
        return;
      }
    });
  });

  moreBtn.addEventListener("click", () => {
    aboutHidden.forEach((item) => {
      item.classList.toggle("about__item--hidden");
    });

    moreBtn.classList.toggle("active");

    moreBtn.querySelector("span").innerText = moreBtn.classList.contains(
      "active",
    )
      ? "Скрыть"
      : "Показать еще";
  });
};
