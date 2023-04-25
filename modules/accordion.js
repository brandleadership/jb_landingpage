// Get the panel element
const panel = document.querySelector('.panel');
const icon = document.querySelector('.icon-rational');

// Toggle the hidden-block class when the accordion is clicked
document.querySelector('.accordion')?.addEventListener('click', function () {
    panel.classList.toggle('hidden-block');
    icon.classList.toggle('rotate');
});
