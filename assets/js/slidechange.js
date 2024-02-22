document.addEventListener('DOMContentLoaded', function () {
    const carouselWrapper = document.getElementById('carouselWrapper');
    const slides = carouselWrapper.querySelectorAll('[data-carousel-item]');
    const dots = document.querySelectorAll('[data-slide-to]');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    let currentIndex = 0;
    const slideInterval = 5000; // Change slide every 5 seconds
    let autoSlide;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.remove('hidden');
                slide.classList.add('duration-700', 'ease-in-out');
            } else {
                slide.classList.add('hidden');
                slide.classList.remove('duration-700', 'ease-in-out');
            }
        });
        // Update active dot
        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('bg-gray-800');
            } else {
                dot.classList.remove('bg-gray-800');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
    }

    // Start auto slide
    autoSlide = setInterval(nextSlide, slideInterval);

    // Stop auto slide when mouse hovers over the carousel
    carouselWrapper.addEventListener('mouseenter', function () {
        clearInterval(autoSlide);
    });

    // Resume auto slide when mouse leaves the carousel
    carouselWrapper.addEventListener('mouseleave', function () {
        autoSlide = setInterval(nextSlide, slideInterval);
    });

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Event listener for navigation dots
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            goToSlide(index);
        });
    });
});
