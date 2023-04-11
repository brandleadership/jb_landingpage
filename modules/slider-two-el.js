// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//     showSlides((slideIndex = n));
// }

// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName('mySlides');

//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.opacity = '0';
//     }

//     slides[slideIndex - 1].style.opacity = 'block';
// }

// prev.addEventListener('click', (e) => {
//     plusSlides(-1);
// });

// next.addEventListener('click', (e) => {
//     plusSlides(1);
// });

// const buttons = document.querySelectorAll('[data-carousel-button]');

// buttons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const offset = button.dataset.carouselButton === 'next' ? 1 : -1;
//         const slides = button
//             .closest('[data-carousel]')
//             .querySelector('[data-slides]');

//         const activeSlide = slides.querySelector('[data-active]');
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset;
//         if (newIndex < 0) newIndex = slides.children.length - 1;
//         if (newIndex >= slides.children.length) newIndex = 0;

//         slides.children[newIndex].dataset.active = true;
//         delete activeSlide.dataset.active;
//     });
// });

const slider = document.querySelector('.slider');
const carousel = document.querySelector('.carousel');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let direction;

prev.addEventListener('click', (e) => {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
        direction = 1;
    }

    carousel.style.justifyContent = 'flex-end';
    slider.getElementsByClassName.transform = 'translate(50%)';
});

next.addEventListener('click', (e) => {
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.getElementsByClassName.transform = 'translate(-50%)';
});

slider.addEventListener('transitionend', function () {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.getElementsByClassName.transition = 'none';
    slider.getElementsByClassName.transform = 'transform(0)';
    setTimeout(function () {
        slider.getElementsByClassName.transition = 'all 0.5s';
    });
});
