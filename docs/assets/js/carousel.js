let track = document.querySelector(".carousel-inner");
let slides = Array.from(track.children);

const paginationElement = document.querySelector("#pagination-beginning");

const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");

const productsCarousel = document.querySelector(".carousel-products");
const eventsCarousel = document.querySelector(".carousel-events");
const productsButton = document.querySelector(".tabs-item--products");
const eventsButton = document.querySelector(".tabs-item--events");

const slideWidth = slides[0].getBoundingClientRect().width;

// when the eventsButton is clicked - reveal the .carousel-events and hide .carousel-products
eventsButton.addEventListener("click", e => {
  eventsButton.classList.add("active-tab");
  productsButton.classList.remove("active-tab");
  eventsCarousel.style.display = "block";
  eventsCarousel.classList.add("active");
  productsCarousel.style.display = "none";
  productsCarousel.classList.remove("active");
  const currentSlide = track.querySelector(
    ".active .carousel-item.current-slide"
  );
  const currentIndex = slides.findIndex(slide => slide === currentSlide);
  updatePagination(currentIndex);
});

// when the productsButton is clicked - reveal the .carousel-products and hide .carousel-events
productsButton.addEventListener("click", e => {
  eventsButton.classList.remove("active-tab");
  productsButton.classList.add("active-tab");
  eventsCarousel.style.display = "none";
  eventsCarousel.classList.remove("active");
  productsCarousel.style.display = "block";
  productsCarousel.classList.add("active");
  const currentSlide = track.querySelector(
    ".active .carousel-item.current-slide"
  );
  const currentIndex = slides.findIndex(slide => slide === currentSlide);
  updatePagination(currentIndex);
});

const updatePagination = index => {
  paginationElement.innerText = index + 1;
};

// // when the nextButton is clicked - slide to the left
nextButton.addEventListener("click", e => {
  const nextIndex = slides.findIndex(slide => slide === nextSlide);
  updatePagination(nextIndex);
});
// when the prevButton is clicked - slide to the right
prevButton.addEventListener("click", e => {
  const prevIndex = slides.findIndex(slide => slide === prevSlide);
  updatePagination(prevIndex);
});
