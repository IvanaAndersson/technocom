let track = document.querySelector(".carousel-track");
let slides = Array.from(track.children);

const paginationElement = document.querySelector("#pagination-beginning");

const nextButton = document.querySelector(".carousel-button--right");
const prevButton = document.querySelector(".carousel-button--left");

const productsCarousel = document.querySelector(".carousel-products");
const eventsCarousel = document.querySelector(".carousel-events");
const productsButton = document.querySelector(".tabs-item--products");
const eventsButton = document.querySelector(".tabs-item--events");

let dotsNav = document.querySelector(".carousel-nav");
let dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// when the eventsButton is clicked - reveal the .carousel-events and hide .carousel-products
eventsButton.addEventListener("click", e => {
  eventsButton.classList.add("active-tab");
  productsButton.classList.remove("active-tab");
  eventsCarousel.style.display = "block";
  eventsCarousel.classList.add("active");
  productsCarousel.style.display = "none";
  productsCarousel.classList.remove("active");
  track = document.querySelector(".active .carousel-track");
  slides = Array.from(track.children);
  slides.forEach(setSlidePosition);
  dotsNav = document.querySelector(".active .carousel-nav");
  dots = Array.from(dotsNav.children);
  const currentSlide = track.querySelector(
    ".active .carousel-item.current-slide"
  );
  const currentIndex = slides.findIndex(slide => slide === currentSlide);
  updatePagination(currentIndex);

  // when the dots are clicked - move to the correspondng slide
  dotsNav.addEventListener("click", e => {
    //which dot indicator was clicked on
    const targetDot = e.target.closest("button");
    if (!targetDot) return;

    const currentSlide = track.querySelector(
      ".active .carousel-item.current-slide"
    );
    const currentDot = dotsNav.querySelector(
      ".active .carousel-indicator.current-slide"
    );
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    updatePagination(targetIndex);
  });
});

// when the productsButton is clicked - reveal the .carousel-products and hide .carousel-events
productsButton.addEventListener("click", e => {
  eventsButton.classList.remove("active-tab");
  productsButton.classList.add("active-tab");
  eventsCarousel.style.display = "none";
  eventsCarousel.classList.remove("active");
  productsCarousel.style.display = "block";
  productsCarousel.classList.add("active");
  track = document.querySelector(".active .carousel-track");
  slides = Array.from(track.children);
  slides.forEach(setSlidePosition);
  dotsNav = document.querySelector(".active .carousel-nav");
  dots = Array.from(dotsNav.children);
  const currentSlide = track.querySelector(
    ".active .carousel-item.current-slide"
  );
  const currentIndex = slides.findIndex(slide => slide === currentSlide);
  updatePagination(currentIndex);
});

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  const slideTransform = "translateX(-" + targetSlide.style.left + ")";
  track.style.transform = slideTransform;
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const updateDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

const updatePagination = index => {
  paginationElement.innerText = index + 1;
};

// when the nextButton is clicked - slide to the left
nextButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(
    ".active .carousel-item.current-slide"
  );
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotsNav.querySelector(
    ".active .carousel-indicator.current-slide"
  );
  const nextDot = currentDot.nextElementSibling;
  const nextIndex = slides.findIndex(slide => slide === nextSlide);

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  updatePagination(nextIndex);
});
// when the prevButton is clicked - slide to the right
prevButton.addEventListener("click", e => {
  const currentSlide = track.querySelector(
    ".active .carousel-item.current-slide"
  );
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotsNav.querySelector(
    ".active .carousel-indicator.current-slide"
  );
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  updatePagination(prevIndex);
});

// when the dots are clicked - move to the correspondng slide
dotsNav.addEventListener("click", e => {
  //which dot indicator was clicked on
  const targetDot = e.target.closest("button");
  if (!targetDot) return;

  const currentSlide = track.querySelector(
    ".active .carousel-item.current-slide"
  );
  const currentDot = dotsNav.querySelector(
    ".active .carousel-indicator.current-slide"
  );
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
  updatePagination(targetIndex);
});
