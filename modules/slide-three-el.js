const first = document?.querySelector('.button-first');
const second = document?.querySelector('.button-second');
const third = document?.querySelector('.button-third');
const dotFirst = document?.querySelector('.dot-1-three-el');
const dotSecond = document?.querySelector('.dot-2-three-el');
const dotThird = document?.querySelector('.dot-3-three-el');
const buttons = document?.querySelectorAll('.button-element');
const buttonTitleTexts = document?.querySelectorAll('.button-title-text');

let slideIndex = 1;

// Add touch event listeners
const slideshow = document?.querySelector('.slideshow-container-three-el');
let xDown = null;
let yDown = null;

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
        if (xDiff > 0) {
            plusSlides(1); // swipe left
        } else {
            plusSlides(-1); // swipe right
        }
    }

    xDown = null;
    yDown = null;
}

showSlides(slideIndex);
maxHeightCalculation();

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function maxHeightCalculation() {
    const slides = document?.getElementsByClassName('slides-three-el');
    if (!slides || slides.length === 0) {
        return;
    }

    const slidesArray = Array.from(slides);
    slidesArray.sort((a, b) => b.offsetHeight - a.offsetHeight);
    const maxHeight = slidesArray[0];
    maxHeight.classList.add('main-slide');

    for (let i = 0; i < slidesArray.length; i++) {
        slidesArray[i].style.position = 'absolute';
    }

    maxHeight.style.position = 'relative';
    slideshow.style.height = maxHeight.offsetHeight + 'px';
}

maxHeightCalculation();

window.addEventListener('resize', maxHeightCalculation);
window.addEventListener('load', maxHeightCalculation);

function showSlides(n) {
    let i;
    let slides = document?.getElementsByClassName('slides-three-el');
    let dots = document?.getElementsByClassName('dot-three-el');

    if (!slides || !slideshow) {
        return;
    }
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = '0';
        slides[i].classList.remove('show');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.opacity = '1';

    slides[slideIndex - 1].classList.add('show');
    dots[slideIndex - 1].className += ' active';
}

buttons.forEach((button, index) => {
    button?.addEventListener('click', () => {
        buttons.forEach((button) => {
            button.classList.remove('clicked-button');
        });
        button.classList.add('clicked-button');
        currentSlide(index + 1);
        maxHeightCalculation();
    });
});

buttonTitleTexts.forEach((text, index) => {
    text.parentElement?.addEventListener('click', () => {
        buttons.forEach((button) => {
            button.classList.remove('clicked-button');
        });
        buttons[index].classList.add('clicked-button');
        currentSlide(index + 1);
    });
});

function updateButtonStyles(activeIndex) {
    buttons.forEach((button) => {
        button.classList.remove('clicked-button');
    });
    buttons[activeIndex - 1].classList.add('clicked-button');
}

first?.addEventListener('click', (e) => {
    currentSlide(1);
});

second?.addEventListener('click', (e) => {
    currentSlide(2);
});

third?.addEventListener('click', (e) => {
    currentSlide(3);
});

dotFirst?.addEventListener('click', (e) => {
    currentSlide(1);
    updateButtonStyles(1);
});

dotSecond?.addEventListener('click', (e) => {
    currentSlide(2);
    updateButtonStyles(2);
});

dotThird?.addEventListener('click', (e) => {
    currentSlide(3);
    updateButtonStyles(3);
});

slideshow?.addEventListener('touchstart', handleTouchStart, false);
slideshow?.addEventListener('touchmove', handleTouchMove, false);
