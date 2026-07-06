
  const CLOSE = document.getElementById("top-bar-close");
  const TOPBAR = document.querySelector(".top-bar__container");

  CLOSE.addEventListener("click", () => {
    if (TOPBAR) {
      TOPBAR.style.display = "none";
    }
  });

