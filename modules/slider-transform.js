const wrap = document.querySelector('.wrap');
const items = document.querySelectorAll('.item');
const toggle = document.querySelectorAll('.dot-three-el');
const clickedBtn = document.querySelectorAll('.button-element');

// Add touch event listeners
// let startX = 0;
// let isDragging = false;

// // Add touch event listeners

// wrap.addEventListener('touchstart', (e) => {
//     startX = e.touches[0].clientX;
//     isDragging = true;
// });

// wrap.addEventListener('touchmove', (e) => {
//     if (!isDragging) return;

//     const currentX = e.touches[0].clientX;
//     const diffX = startX - currentX;

//     // Detect swipe direction (right or left)
//     if (diffX > 0) {
//         showSlide(wrap, -itemWidth, 1); // Swipe left
//     } else if (diffX < 0) {
//         showSlide(wrap, itemWidth, -1); // Swipe right
//     }

//     startX = currentX;
// });

// wrap.addEventListener('touchend', () => {
//     isDragging = false;
// });

// slider

// let desiredWidth = 800;

// items.forEach((item) => {
//     item.style.width = desiredWidth + '%';
// });
// window.addEventListener('resize', maxHeightCalculation);
// window.addEventListener('load', maxHeightCalculation);

function maxHeightCalculation() {
    const maxHeight = document?.getElementsByClassName(
        'slideshow-container-three-el'
    )[0];
    const horizontalCharts = document.querySelectorAll(
        '.chart-wrapper-horizontal-bar'
    );
    horizontalCharts?.forEach((item) => {
        item.style.height = maxHeight.offsetHeight - 68 + 'px';
    });
}

let itemWidth = 100;
let position = 0;
let currentDot = 0;
let currentBtn = 0;

showSlide(position, currentDot, currentBtn);

function showSlide(newPosition, newDot, newBtn) {
    position = newPosition;
    currentDot = newDot;
    currentBtn = newBtn;

    wrap.style.transform = 'translateX(' + position + '%)';

    toggle.forEach((item) => item.classList.remove('active'));
    toggle[currentDot].classList.add('active');

    clickedBtn[currentBtn].classList.add('clicked-button');
}

// Add event listeners to the buttons
for (let i = 0; i < clickedBtn.length; i++) {
    clickedBtn[i].addEventListener('click', function (button) {
        let newPosition = -100 * i;

        showSlide(newPosition, i, currentBtn);

        // Remove the 'clicked-button' class from all buttons
        clickedBtn.forEach((btn) => btn.classList.remove('clicked-button'));

        // Add the 'clicked-button' class to the clicked button
        clickedBtn[i].classList.add('clicked-button');
    });
}

// Add event listeners to the dots
for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function () {
        let newPosition = -100 * i;
        showSlide(newPosition, i, currentBtn);
    });
}
