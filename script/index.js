const slider = document.querySelector('.projects-list');
const slides = Array.from(slider.children);
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slideWidth = slides[0].getBoundingClientRect().width;

// Set the width of the slider container based on the number of slides
slider.style.width = `${slideWidth * slides.length}px`;

// Position the slides in a row
slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

let currentSlide = 0;

// Function to move the slider to the next slide
const moveToNextSlide = () => {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
};

// Function to move the slider to the previous slide
const moveToPrevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  slider.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
};

// Add event listeners to the previous and next buttons
prevButton.addEventListener('click', moveToPrevSlide);
nextButton.addEventListener('click', moveToNextSlide);
