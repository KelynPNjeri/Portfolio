const menuButton = document.querySelector(".menu-icon");
const menu = document.querySelector(".navigation");
const navMenu = document.querySelector(".navlinks");
const brand = document.querySelector(".brand");
const navLinks = document.querySelectorAll(".nav_item");

// Set Initial State.
let viewMenu = false;

menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!viewMenu) {
    menuButton.classList.add("close");
    menu.classList.add("show");
    navMenu.classList.add("show");
    brand.classList.add("show");
    navLinks.forEach(link => link.classList.add("show"));

    // Changing Initial State.
    viewMenu = true;
  } else {
    menuButton.classList.remove("close");
    menu.classList.remove("show");
    navMenu.classList.remove("show");
    brand.classList.remove("show");
    navLinks.forEach(link => link.classList.remove("show"));

    // Changing Initial State.
    viewMenu = false;
  }
}
