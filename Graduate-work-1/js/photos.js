export const photos = () => {
  const sections = document.querySelectorAll(".about__content");

  if (!sections.length) return;

  sections.forEach((section) => {
    const imagesContainer = section.querySelector(".about__content-images");

    const button = section.querySelector(".about__photos-link");

    if (!imagesContainer || !button) return;

    const images = [
      "./img/about-img.png",
      "./img/about-img.png",
      "./img/about-img.png",
      "./img/about-img.png",
    ];

    let isOpen = false;

    // Скрываем добавленные фотографии
    const addedImages = [];

    button.addEventListener("click", (event) => {
      event.preventDefault();

      isOpen = !isOpen;

      if (isOpen) {
        // Добавляем фотографии
        images.forEach((src) => {
          const link = document.createElement("a");

          link.classList.add("about__lightbox");
          link.setAttribute("data-fslightbox", "gallery");
          link.href = "./img/about-img-large.webp";

          const img = document.createElement("img");

          img.classList.add("about__img");
          img.src = src;
          img.alt = "Фото";

          link.append(img);
          imagesContainer.append(link);

          addedImages.push(link);
        });

        button.textContent = "Скрыть";
      } else {
        // Удаляем добавленные фотографии
        addedImages.forEach((image) => {
          image.remove();
        });

        addedImages.length = 0;

        button.textContent = "Смотреть все фото";
      }
    });
  });
};
