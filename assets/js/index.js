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

// script for switching between tabs in the catalog item page

const characteristicsTabLink = document.getElementById(
  "characteristics-tab-link"
);
const documentsTabLink = document.getElementById("documents-tab-link");
const threedModelTabLink = document.getElementById("3d-model-tab-link");
const characteristicsCatalogItem = document.getElementById(
  "characteristics-catalog-item"
);
const documentsCatalogItem = document.getElementById("documents-catalog-item");
const threedModelCatalogItem = document.getElementById("3d-model-catalog-item");

const switchTabLink = (
  activeTabLink,
  inactiveTabLinks,
  activeCatalogItem,
  inactiveCatalogItems
) => {
  activeTabLink.classList.add("active-tab-link");
  activeCatalogItem.classList.add("active-catalog-section");
  activeCatalogItem.classList.remove("d-none");

  inactiveTabLinks.forEach(tabLink => {
    tabLink.classList.remove("active-tab-link");
  });

  inactiveCatalogItems.forEach(catalogItem => {
    catalogItem.classList.remove("active-catalog-section");
    catalogItem.classList.add("d-none");
  });
};

characteristicsTabLink.addEventListener("click", _e => {
  switchTabLink(
    characteristicsTabLink,
    [documentsTabLink, threedModelTabLink],
    characteristicsCatalogItem,
    [documentsCatalogItem, threedModelCatalogItem]
  );
  threedModelCatalogItem.classList.remove("d-flex");
});

documentsTabLink.addEventListener("click", _e => {
  switchTabLink(
    documentsTabLink,
    [characteristicsTabLink, threedModelTabLink],
    documentsCatalogItem,
    [characteristicsCatalogItem, threedModelCatalogItem]
  );

  threedModelCatalogItem.classList.remove("d-flex");
});

threedModelTabLink.addEventListener("click", _e => {
  switchTabLink(
    threedModelTabLink,
    [documentsTabLink, characteristicsTabLink],
    threedModelCatalogItem,
    [documentsCatalogItem, characteristicsCatalogItem]
  );

  threedModelCatalogItem.classList.add("d-flex");
});
