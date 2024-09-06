// let currentIndex = 0;  
// const slides = document.querySelectorAll('.slide');  
// const totalSlides = slides.length;  
//  document.getElementById('next').addEventListener('click', () => {  
//       currentIndex = (currentIndex + 1) % totalSlides;  
//          updateSlider();  
//             });  

//  document.getElementById('prev').addEventListener('click', () => {  
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  
//             updateSlider();  
//             });  

//  function updateSlider() {  
//      const slidesContainer = document.querySelector('.slides');  
//         slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;  
//             }  

let currentIndex = 0;  
const slides = document.querySelectorAll('.slide');  
const totalSlides = slides.length;  
let autoSlide;  

function startAutoSlide() {  
    autoSlide = setInterval(() => {  
        currentIndex = (currentIndex + 1) % totalSlides;  
        updateSlider();  
    }, 3000); // Change slide every 3 seconds  
}  

function stopAutoSlide() {  
    clearInterval(autoSlide);  
}  

document.getElementById('next').addEventListener('click', () => {  
    currentIndex = (currentIndex + 1) % totalSlides;  
    updateSlider();  
});  

document.getElementById('prev').addEventListener('click', () => {  
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;  
    updateSlider();  
});  

function updateSlider() {  
    const slidesContainer = document.querySelector('.slides');  
    slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;  
}  

const slider = document.getElementById('slider');  
slider.addEventListener('mouseenter', stopAutoSlide);  
slider.addEventListener('mouseleave', startAutoSlide);  

startAutoSlide();