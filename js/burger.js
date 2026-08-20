// export default class BurgerMenu {
//   constructor(config, headerFixedInstance = null) {
//     this.config = config;
//     this.burgerButton = document.querySelector(`.${this.config.BURGER}`);
//     this.burgerMenu = document.querySelector(`.${this.config.HEADER_MENU}`);
//     this.body = document.querySelector(`.${this.config.PAGE_BODY}`);
//     this.headerFixedInstance = headerFixedInstance;
//     this.main = document.querySelector(`.${this.config.MAIN}`);

//     if (!this.burgerButton || !this.burgerMenu || !this.body) {
//       throw new Error("Required DOM elements are missing.");
//     }

//     this.isMobileView = window.innerWidth <= this.config.BREAKPOINT;

//     this.onBurgerClick = this.onBurgerClick.bind(this);
//     this.onBodyClick = this.onBodyClick.bind(this);
//     this.handleTouchStart = this.handleTouchStart.bind(this);
//     this.handleTouchMove = this.handleTouchMove.bind(this);
//     this.handleTouchEnd = this.handleTouchEnd.bind(this);
//     this.onWindowResize = this.onWindowResize.bind(this);

//     this.manageEvents();
//     window.addEventListener("resize", this.onWindowResize);
//   }

//   manageEvents() {
//     if (this.isMobileView) {
//       this.initEvents();
//     } else {
//       this.removeEvents();
//       this.hideBurgerMenu();
//     }
//   }

//   initEvents() {
//     // Click events
//     this.burgerButton.addEventListener("click", this.onBurgerClick);
//     this.body.addEventListener("click", this.onBodyClick);

//     // Touch events
//     this.body.addEventListener("touchstart", this.handleTouchStart);
//     this.body.addEventListener("touchmove", this.handleTouchMove);
//     this.body.addEventListener("touchend", this.handleTouchEnd);
//   }

//   removeEvents() {
//     // Click events
//     this.burgerButton.removeEventListener("click", this.onBurgerClick);
//     this.body.removeEventListener("click", this.onBodyClick);

//     // Touch events
//     this.body.removeEventListener("touchstart", this.handleTouchStart);
//     this.body.removeEventListener("touchmove", this.handleTouchMove);
//     this.body.removeEventListener("touchend", this.handleTouchEnd);
//   }

//   onWindowResize() {
//     const isNowMobileView = window.innerWidth <= this.config.BREAKPOINT;

//     if (this.isMobileView !== isNowMobileView) {
//       this.isMobileView = isNowMobileView;
//       this.manageEvents();
//     }
//   }

//   // Click events
//   onBurgerClick(event) {
//     event.stopPropagation();

//     const isOpen = this.burgerButton.classList.toggle(this.config.BURGER_OPEN);

//     this.burgerButton.ariaLabel = isOpen
//       ? this.config.lABEL.CLOSE
//       : this.config.lABEL.OPEN;

//     this.burgerButton.ariaExpanded = isOpen;

//     this.burgerMenu.classList.toggle(this.config.HEADER_MENU_OPEN, isOpen);

//     this.body.classList.toggle(this.config.PAGE_BODY_NO_SCROLL, isOpen);

//     if (this.main) {
//       this.main.style.pointerEvents = isOpen ? "none" : "";
//     }

//     if (this.headerFixedInstance) {
//       if (isOpen) {
//         this.headerFixedInstance.removeFixedClass();
//       } else {
//         this.headerFixedInstance.updateFixedClass();
//       }
//     }
//   }

//   hideBurgerMenu() {
//     const wasOpen = this.isBurgerMenuOpen();
//     this.burgerButton.classList.remove(this.config.BURGER_OPEN);
//     this.burgerButton.ariaLabel = this.config.lABEL.OPEN;
//     this.burgerButton.ariaExpanded = false;
//     this.burgerMenu.classList.remove(this.config.HEADER_MENU_OPEN);
//     this.body.classList.remove(this.config.PAGE_BODY_NO_SCROLL);

//     if (this.main) {
//       this.main.style.pointerEvents = "";
//     }

//     if (wasOpen && this.headerFixedInstance) {
//       this.headerFixedInstance.updateFixedClass();
//     }
//   }

//   isBurgerMenuOpen() {
//     return this.burgerMenu.classList.contains(this.config.HEADER_MENU_OPEN);
//   }

//   onBodyClick(event) {
//     const target = event.target;

//     const isLinkInMenu = target.classList.contains(this.config.MENU_LINK);
//     const isMenuOpen = this.isBurgerMenuOpen();
//     const isClickOutsideMenu =
//       !target.closest(`.${this.config.HEADER_MENU}`) &&
//       !target.closest(`.${this.config.BURGER}`);

//     if (
//       (isLinkInMenu && window.innerWidth <= this.config.BREAKPOINT) ||
//       (isMenuOpen && isClickOutsideMenu)
//     ) {
//       this.hideBurgerMenu();
//     }
//   }

//   // Touch events
//   handleTouchStart(event) {
//     if (!this.isBurgerMenuOpen()) return;
//     this.touchStartX = event.changedTouches[0].screenX;
//     this.burgerMenu.style.transition = "none";
//   }

//   handleTouchMove(event) {
//     if (!this.isBurgerMenuOpen()) return;
//     const currentX = event.changedTouches[0].screenX;
//     const translateX = Math.min(0, currentX - this.touchStartX);

//     this.burgerMenu.style.left = `${translateX}px`;
//   }

//   handleTouchEnd(event) {
//     if (!this.isBurgerMenuOpen()) return;
//     const touchEndX = event.changedTouches[0].screenX;
//     const swipeDistance = touchEndX - this.touchStartX;

//     this.burgerMenu.style.transition = "";
//     this.burgerMenu.style.left = "";

//     if (swipeDistance > -70) {
//       this.hideBurgerMenu();
//     }
//   }

//   handleTouchMove(event) {
//     if (!this.isBurgerMenuOpen()) return;

//     const currentX = event.changedTouches[0].screenX;
//     const translateX = Math.min(0, currentX - this.touchStartX);

//     this.burgerMenu.style.transform = `translateX(${translateX}px)`;
//     this.burgerButton.style.transform = `translateX(${translateX}px)`;
//   }
// }

export default class BurgerMenu {
  constructor(config, headerFixed = null) {
    this.config = config;
    this.headerFixed = headerFixed;

    this.burger = document.querySelector(`.${config.burger}`);
    this.menu = document.querySelector(`.${config.menu}`);
    this.body = document.querySelector(`.${config.pageBody}`);

    if (!this.burger || !this.menu || !this.body) {
      throw new Error("Burger menu elements are missing.");
    }

    this.isMobile = window.innerWidth <= config.breakpoint;

    this.handleBurgerClick = this.handleBurgerClick.bind(this);
    this.handleBodyClick = this.handleBodyClick.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);

    this.updateEvents();

    window.addEventListener("resize", this.handleResize);
  }

  updateEvents() {
    this.removeEvents();

    if (this.isMobile) {
      this.addEvents();
    } else {
      this.close();
    }
  }

  addEvents() {
    this.burger.addEventListener("click", this.handleBurgerClick);
    this.body.addEventListener("click", this.handleBodyClick);

    this.body.addEventListener("touchstart", this.handleTouchStart);
    this.body.addEventListener("touchmove", this.handleTouchMove);
    this.body.addEventListener("touchend", this.handleTouchEnd);
  }

  removeEvents() {
    this.burger.removeEventListener("click", this.handleBurgerClick);
    this.body.removeEventListener("click", this.handleBodyClick);

    this.body.removeEventListener("touchstart", this.handleTouchStart);
    this.body.removeEventListener("touchmove", this.handleTouchMove);
    this.body.removeEventListener("touchend", this.handleTouchEnd);
  }

  handleResize() {
    const isMobile = window.innerWidth <= this.config.breakpoint;

    if (isMobile !== this.isMobile) {
      this.isMobile = isMobile;
      this.updateEvents();
    }
  }

  handleBurgerClick(event) {
    event.stopPropagation();

    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  open() {
    this.burger.classList.add(this.config.burgerOpen);
    this.menu.classList.add(this.config.menuOpen);
    this.body.classList.add(this.config.noScroll);

    this.burger.ariaLabel = this.config.labels.close;
    this.burger.ariaExpanded = "true";

    if (this.headerFixed) {
      this.headerFixed.removeFixedClass();
    }
  }

  close() {
    const wasOpen = this.isOpen();

    this.burger.classList.remove(this.config.burgerOpen);
    this.menu.classList.remove(this.config.menuOpen);
    this.body.classList.remove(this.config.noScroll);

    this.burger.ariaLabel = this.config.labels.open;
    this.burger.ariaExpanded = "false";

    if (wasOpen && this.headerFixed) {
      this.headerFixed.updateFixedClass();
    }
  }

  isOpen() {
    return this.menu.classList.contains(this.config.menuOpen);
  }

  handleBodyClick(event) {
    const target = event.target;

    const clickedLink = target.closest(`.${this.config.menuLink}`);
    const clickedMenu = target.closest(`.${this.config.menu}`);
    const clickedBurger = target.closest(`.${this.config.burger}`);

    if (clickedLink || (this.isOpen() && !clickedMenu && !clickedBurger)) {
      this.close();
    }
  }

  handleTouchStart(event) {
    if (!this.isOpen()) return;

    this.touchStartX = event.changedTouches[0].screenX;
  }

  handleTouchMove(event) {
    if (!this.isOpen()) return;

    const currentX = event.changedTouches[0].screenX;
    const translateX = Math.min(0, currentX - this.touchStartX);

    this.menu.style.transform = `translateX(${translateX}px)`;
  }

  handleTouchEnd(event) {
    if (!this.isOpen()) return;

    const endX = event.changedTouches[0].screenX;
    const distance = endX - this.touchStartX;

    this.menu.style.transform = "";

    if (distance < -70) {
      this.close();
    }
  }
}
