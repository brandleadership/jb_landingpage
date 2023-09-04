const wrap = document.querySelector('.wrap-two-el');
const buttonPrev = document.querySelector('.prev');
const buttonNext = document.querySelector('.next');
const toggle = document.querySelectorAll('.dot');
const items = document.querySelectorAll('.item-two-el');
const item = document.querySelector('item');

// Add touch event listeners
let startX = 0;
let isDragging = false;

// Add touch event listeners

wrap.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});

wrap.addEventListener('touchmove', (e) => {
    if (!isDragging) return;

    const currentX = e.touches[0].clientX;
    const diffX = startX - currentX;

    // Detect swipe direction (right or left)
    if (diffX > 0) {
        showSlide(wrap, -100, 1); // Swipe left
    } else if (diffX < 0) {
        showSlide(wrap, 100, -1); // Swipe right
    }

    startX = currentX;
});

wrap.addEventListener('touchend', () => {
    isDragging = false;
});

//slider transform

let itemWidth = 100;
let position = 0;
let currentDot = 0;

showSlide(wrap, 0, 0);

function showSlide(elem, pix, n) {
    position += pix;
    currentDot += n;
    console.log(position);

    if (position < -100) {
        position -= pix;
        return false;
    } else if (position > 0) {
        position -= pix;
        return false;
    }

    elem.style.transform = 'translateX(' + position + '%)';
    toggle.forEach((item) => item.classList.remove('active'));
    toggle[currentDot].classList.add('active');
}

buttonNext.addEventListener('click', function () {
    showSlide(wrap, -100, 1);
});

buttonPrev.addEventListener('click', function () {
    showSlide(wrap, 100, -1);
});

for (let i = 0; i < items.length; i++) {
    toggle[i].addEventListener('click', function () {
        position = -100 * i;
        currentDot = i;
        wrap.style.transform = 'translateX(' + position + '%)';

        toggle.forEach((item) => item.classList.remove('active'));
        toggle[currentDot].classList.add('active');
    });
}
