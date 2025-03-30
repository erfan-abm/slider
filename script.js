document.addEventListener("DOMContentLoaded",function(){
    let slides = document.querySelector(".slides")
    let slide = document.querySelectorAll(".slide")
    let next = document.getElementById("next")
    let prev = document.getElementById("prev")

    let slideWidth = slide[0].offsetWidth;
    let currentIndex = 0;
    let totalSlide = slide.length
    let visibleSlide = 1;

    function updateSlider(){
        let offset = currentIndex * slideWidth
        slides.style.transform = `translateX(${offset}px)`;

        prev.disabled = currentIndex === 0;
        next.disabled = currentIndex + visibleSlide >= totalSlide;
    }
    next.addEventListener("click", function(){
        if(currentIndex + visibleSlide < totalSlide){
            currentIndex++;
            updateSlider()
        }
    });
    prev.addEventListener("click",function(){
        if(currentIndex>0){
            currentIndex--;
            updateSlider();
        }
    });
    updateSlider()
})