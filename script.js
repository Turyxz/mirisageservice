// script.js

document.addEventListener('DOMContentLoaded', (event) => {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function showNextSlide() {
        currentIndex++;
        if (currentIndex >= totalSlides) {
            currentIndex = 0; // Loop back to the first slide
        }
        const newTransform = `translateX(-${currentIndex * 100}vw)`;
        document.querySelector('.slider').style.transform = newTransform;
    }

    setInterval(showNextSlide, 4000); // Change slide every 3 seconds
});

window.addEventListener('scroll', function () {
    var header = document.getElementById('floating-header');
    var scrollPosition = window.scrollY;

    // Adjust the top position of the header
    header.style.top = scrollPosition + 'px';
});