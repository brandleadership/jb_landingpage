const wrap = document.querySelector('.wrap');
const items = document.querySelectorAll('.item');
const toggle = document.querySelectorAll('.dot-three-el');
const clickedBtn = document.querySelectorAll('.button-element');

// Add touch event listeners

let touchStartX = 0;
let touchEndX = 0;

wrap.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
});

wrap.addEventListener('touchmove', (e) => {
    touchEndX = e.touches[0].clientX;
});

wrap.addEventListener('touchend', () => {
    const touchDistance = touchEndX - touchStartX;

    // Adjust this threshold to control swipe sensitivity
    const swipeThreshold = 50;

    if (touchDistance > swipeThreshold && currentBtn > 0) {
        // Swipe to the right
        showSlide(position + 100, currentDot - 1, currentBtn - 1);
    } else if (
        touchDistance < -swipeThreshold &&
        currentBtn < clickedBtn.length - 1
    ) {
        // Swipe to the left
        showSlide(position - 100, currentDot + 1, currentBtn + 1);
    }
});

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
