const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");

const productsCarousel = document.querySelector(".carousel-products");
const eventsCarousel = document.querySelector(".carousel-events");
const productsButton = document.querySelector(".tabs-item--products");
const eventsButton = document.querySelector(".tabs-item--events");

// when the eventsButton is clicked - reveal the .carousel-events and hide .carousel-products
eventsButton.addEventListener("click", e => {
  eventsButton.classList.add("active-tab");
  productsButton.classList.remove("active-tab");
  eventsCarousel.style.display = "block";
  eventsCarousel.classList.add("active");
  productsCarousel.style.display = "none";
  productsCarousel.classList.remove("active");
});

// when the productsButton is clicked - reveal the .carousel-products and hide .carousel-events
productsButton.addEventListener("click", e => {
  eventsButton.classList.remove("active-tab");
  productsButton.classList.add("active-tab");
  eventsCarousel.style.display = "none";
  eventsCarousel.classList.remove("active");
  productsCarousel.style.display = "block";
  productsCarousel.classList.add("active");
});
