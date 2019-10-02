const logoContainer = document.querySelector("logo-container");
const myNav = document.getElementById("navigation-desktop");
const mobileNav = document.getElementById("navigation-mobile");
const mobileNavButton = document.getElementById("mobileNavButton");
const headLogo = document.getElementById("head-logo-picture");
const searchButton = document.getElementById("dropdownMenuButton");
const mobileSearchButton = document.getElementById("dropdownMobileButton");
const burgerMenu = document.getElementById("mobileNavButton");
const searchBar = document.getElementById("search-bar-hidden");
const searchBarMobile = document.getElementById("search-bar-hidden-mobile");
let currentY = window.scrollY;
let scrollDirection = "";

window.addEventListener("scroll", event => {
  // console.log(window.scrollY);
  scrollDirection = window.scrollY > currentY ? "down" : "up";
  currentY = window.scrollY;

  if (currentY > 100) {
    myNav.classList.add("navbar-when-scrolled");
    mobileNav.classList.add("navbar-when-scrolled");
  } else {
    myNav.classList.remove("navbar-when-scrolled");
    mobileNav.classList.remove("navbar-when-scrolled");
  }
});

searchButton.addEventListener("click", event => {
  const searchIcon = searchButton.querySelectorAll(".search-button")[0];
  searchBar.classList.toggle("search-bar-shown");
  myNav.classList.toggle("navbar-search-clicked");
  searchIcon.classList.toggle("active");
});

mobileSearchButton.addEventListener("click", event => {
  const searchIcon = mobileSearchButton.querySelectorAll(".search-button")[0];
  searchBarMobile.classList.toggle("search-bar-shown");
  mobileNav.classList.toggle("navbar-search-clicked");
  searchIcon.classList.toggle("active");
});
mobileNavButton.addEventListener("click", event => {
  mobileNav.classList.toggle("navbar-search-clicked");
});

burgerMenu.addEventListener("click", event => {
  const burgerIcon = burgerMenu.querySelector(".navbar-icon");
  burgerIcon.classList.toggle("active");
});

// script for hiding the image after the page has loaded

window.addEventListener("load", event => {
  const loader = document.querySelector(".loader");
  loader.classList.add("hidden");
});
