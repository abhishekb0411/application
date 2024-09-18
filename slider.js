// Variables to keep track of the current slide index and elements
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const totalSlides = slides.length;
const autoSlideInterval = 5000; // Auto-slide every 5 seconds

// Function to show the slides based on the index
function showSlides(n) {
    if (n >= totalSlides) slideIndex = 0; // Wrap around to the first slide
    if (n < 0) slideIndex = totalSlides - 1; // Wrap around to the last slide
    
    // Move slides
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${slideIndex * 100}%)`;
    });

    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
    });
    dots[slideIndex].classList.add('active');
}

// Function to move to the next slide
function nextSlide() {
    showSlides(slideIndex += 1);
}

// Function to move to the previous slide
function prevSlide() {
    showSlides(slideIndex -= 1);
}

// Event listeners for arrow buttons
document.querySelector('.left-arrow').addEventListener('click', prevSlide);
document.querySelector('.right-arrow').addEventListener('click', nextSlide);

// Event listeners for dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        showSlides(slideIndex = index);
    });
});

// Initialize the slider
showSlides(slideIndex);

// Auto-slide functionality
setInterval(nextSlide, autoSlideInterval);