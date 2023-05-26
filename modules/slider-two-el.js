const slideshow = document?.querySelector('.slideshow-container');
const prev = document?.querySelector('.prev');
const next = document?.querySelector('.next');
const dot1 = document?.querySelector('.dot-1');
const dot2 = document?.querySelector('.dot-2');

let slideIndex = 1;

// Add touch event listeners

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

// const maxHeight = Array.from(document?.getElementsByClassName('mySlides')).sort(
//     (a, b) => a.scrollHeight - b.scrollHeight
// )[document?.getElementsByClassName('mySlides').length - 1];

// maxHeight?.classList.add('main-slide');
// let slides = document?.getElementsByClassName('mySlides');
// for (let i = 0; i < slides.length; i++) {
//     slides[i].style.position = 'absolute';
// }

// maxHeight.style.position = 'relative';

const maxHeight = Array.from(document?.getElementsByClassName('mySlides')).sort(
    (a, b) => a.scrollHeight - b.scrollHeight
)[document?.getElementsByClassName('mySlides').length - 1];

if (maxHeight) {
    maxHeight.classList.add('main-slide');
    let slides = document?.getElementsByClassName('mySlides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.position = 'absolute';
    }

    maxHeight.style.position = 'relative';
}

function showSlides(n) {
    let i;
    let slides = document?.getElementsByClassName('mySlides');

    let dots = document?.getElementsByClassName('dot');
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

prev?.addEventListener('click', (e) => {
    plusSlides(-1);
});

next?.addEventListener('click', (e) => {
    plusSlides(1);
});

dot1?.addEventListener('click', (e) => {
    currentSlide(1);
});

dot2?.addEventListener('click', (e) => {
    currentSlide(2);
});

slideshow?.addEventListener('touchstart', handleTouchStart, false);
slideshow?.addEventListener('touchmove', handleTouchMove, false);
