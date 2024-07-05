document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideWidth = document.querySelector(".slide").clientWidth;

    let slideIndex = 0;

    function nextSlide() {
        if (slideIndex === slides.children.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        updateSlide();
    }

    function updateSlide() {
        const offset = -slideIndex * slideWidth;
        slides.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds (3000 milliseconds)
});
