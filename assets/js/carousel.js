const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");

const productsButton = document.querySelector(".tabs-item--products");
const eventsButton = document.querySelector(".tabs-item--events");
const productsCarousel = document.querySelector(".carousel-products");
const eventsCarousel = document.querySelector(".carousel-events");

const productsButtonMobile = document.querySelector(".tabs-mob-item--products");
const eventsButtonMobile = document.querySelector(".tabs-mob-item--events");
const productsCarouselMobile = document.getElementById(
  "carouselProductsMobile"
);
const eventsCarouselMobile = document.getElementById("carouselEventsMobile");

const addCarouselSwitchHandler = (
  tabToSwitchTo,
  tabToSwitchFrom,
  carouselToSwitchTo,
  carouselToSwitchFrom
) => {
  tabToSwitchTo.addEventListener("click", _e => {
    tabToSwitchTo.classList.add("active-tab");
    tabToSwitchFrom.classList.remove("active-tab");
    carouselToSwitchTo.style.display = "block";
    carouselToSwitchTo.classList.add("active");
    carouselToSwitchFrom.style.display = "none";
    carouselToSwitchFrom.classList.remove("active");
  });
};

// when the eventsButton is clicked - reveal the .carousel-events and hide .carousel-products
addCarouselSwitchHandler(
  eventsButton,
  productsButton,
  eventsCarousel,
  productsCarousel
);
addCarouselSwitchHandler(
  eventsButtonMobile,
  productsButtonMobile,
  eventsCarouselMobile,
  productsCarouselMobile
);
// when the productsButton is clicked - reveal the .carousel-products and hide .carousel-events
addCarouselSwitchHandler(
  productsButton,
  eventsButton,
  productsCarousel,
  eventsCarousel
);
addCarouselSwitchHandler(
  productsButtonMobile,
  eventsButtonMobile,
  productsCarouselMobile,
  eventsCarouselMobile
);
