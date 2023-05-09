const first = document.querySelector('.button-first');
const second = document.querySelector('.button-second');
const third = document.querySelector('.button-third');
const dotFirst = document.querySelector('.dot-1-three-el');
const dotSecond = document.querySelector('.dot-2-three-el');
const dotThird = document.querySelector('.dot-3-three-el');
const buttons = document.querySelectorAll('.button-element');

let slideIndex = 1;

// Add touch event listeners
const slideshow = document.querySelector('.slideshow-container-three-el');
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

function plusSlides(n) {
    showSlides((slideIndex += n));
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName('slides-three-el');
    let dots = document.getElementsByClassName('dot-three-el');
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
        slides[i].style.display = 'none';
        slides[i].classList.remove('show');
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('show');
    dots[slideIndex - 1].className += ' active';
}

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        buttons.forEach((button) => {
            button.classList.remove('clicked-button');
        });

        button.classList.add('clicked-button');
    });
});

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
});

dotSecond?.addEventListener('click', (e) => {
    currentSlide(2);
});

dotThird?.addEventListener('click', (e) => {
    currentSlide(3);
});

slideshow?.addEventListener('touchstart', handleTouchStart, false);
slideshow?.addEventListener('touchmove', handleTouchMove, false);
