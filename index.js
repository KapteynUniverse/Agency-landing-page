const navbar = document.querySelector(".header__nav");
const navbarButton = document.querySelector(".header__button");
const overlay = document.querySelector(".overlay");
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const logo = document.querySelector(".header__logo");

navbarButton.addEventListener("click", () => {
  if (navbar.classList.contains("active")) {
    closeNav();
  } else {
    openNav();
  }
});

overlay.addEventListener("click", () => {
  closeNav();
});

const media = window.matchMedia("(min-width: 45rem)");
media.addEventListener("change", () => {
  if (media.matches) {
    closeNav();
  }
});

const navLinks = document.querySelectorAll(".header__nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeNav();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && navbar.classList.contains("active")) {
    closeNav();
    navbarButton.focus();
  }
});

function openNav() {
  setInert(true);
  navbar.classList.add("active");
  navbarButton.setAttribute("aria-expanded", "true");
  navbarButton.setAttribute("aria-label", "Close primary navigation bar");
  navbar.firstElementChild.focus();
}

function closeNav() {
  setInert(false);
  navbar.classList.remove("active");
  navbarButton.setAttribute("aria-expanded", "false");
  navbarButton.setAttribute("aria-label", "Open primary navigation bar");
}

function setInert(state) {
  main.inert = state;
  footer.inert = state;
  logo.inert = state;

  [...header.children].forEach((el) => {
    if (!el.contains(navbar) && el !== navbarButton && !navbar.contains(el)) {
      el.inert = state;
    }
  });
}
