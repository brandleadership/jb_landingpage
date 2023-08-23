let wrap = document.querySelector('.wrap');
let items = document.querySelectorAll('.item');
let toggle = document.querySelectorAll('.dot-three-el');
let clickedBtn = document.querySelectorAll('.button-element');

let desiredWidth = 800;

items.forEach((item) => {
    item.style.width = desiredWidth + 'px';
});

let itemWidth = desiredWidth;
let position = 0;
let currentDot = 0;
let currentBtn = 0;

showSlide(position, currentDot, currentBtn);

function showSlide(newPosition, newDot, newBtn) {
    position = newPosition;
    currentDot = newDot;
    currentBtn = newBtn;

    wrap.style.transform = 'translateX(' + position + 'px)';

    toggle.forEach((item) => item.classList.remove('active'));
    toggle[currentDot].classList.add('active');

    clickedBtn.forEach((btn) => btn.classList.remove('clicked-button'));
    clickedBtn[currentBtn].classList.add('clicked-button');
}

// Add event listeners to the buttons
for (let i = 0; i < clickedBtn.length; i++) {
    clickedBtn[i].addEventListener('click', function () {
        let newPosition = -itemWidth * i;
        showSlide(newPosition, i, currentBtn);
    });
}

// Add event listeners to the dots
for (let i = 0; i < toggle.length; i++) {
    toggle[i].addEventListener('click', function () {
        let newPosition = -itemWidth * i;
        showSlide(newPosition, i, currentBtn);
    });
}
