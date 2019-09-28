const logoContainer = document.querySelector("logo-container");
const myNav = document.getElementById("navigation-desktop");
const headLogo = document.getElementById("head-logo-picture");
const searchButton = document.getElementById("dropdownMenuButton");
const searchBar = document.getElementById("search-bar-hidden");
let currentY = window.scrollY;
let scrollDirection = "";

window.addEventListener("scroll", event => {
  // console.log(window.scrollY);
  scrollDirection = window.scrollY > currentY ? "down" : "up";
  currentY = window.scrollY;

  if (currentY > 100) {
    myNav.classList.add("navbar-when-scrolled");
  } else {
    myNav.classList.remove("navbar-when-scrolled");
  }
});

searchButton.addEventListener("click", event => {
  // console.log("button is clicked");
  searchBar.classList.toggle("search-bar-shown");
  myNav.classList.toggle("navbar-search-clicked");
});
