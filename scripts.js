// scripts.js
let currentIndex = 0;

const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

setInterval(() => {
    currentIndex++;
    if (currentIndex === totalSlides) {
        currentIndex = 0;
    }
    updateSlidePosition();
}, 3000);

function updateSlidePosition() {
    const slideWidth = slides[0].clientWidth;
    const newTransformValue = -currentIndex * slideWidth;
    document.querySelector('.carousel-slide').style.transform = `translateX(${newTransformValue}px)`;
}
