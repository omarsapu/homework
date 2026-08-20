export default class HeaderFixed {
  constructor({ header, fixedClass }) {
    this.header = document.querySelector(`.${header}`);
    this.fixedClass = fixedClass;

    if (!this.header) {
      throw new Error("Header element is missing.");
    }

    this.handleScroll = this.handleScroll.bind(this);

    window.addEventListener("scroll", this.handleScroll);

    this.handleScroll();
  }

  handleScroll() {
    this.header.classList.toggle(this.fixedClass, window.scrollY > 0);
  }

  removeFixedClass() {
    this.header.classList.remove(this.fixedClass);
  }

  updateFixedClass() {
    this.handleScroll();
  }
}
