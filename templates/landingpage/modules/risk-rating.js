//When a highlight is selected in bsi, the highlight class is set to this risk level.
// Now, we have to automatically add a second class which then manages showing the correct text below.

const wrapper = document.getElementsByClassName('risk-bar')[0];

wrapper.classList.contains('risk-level-five')
    ? wrapper.classList.toggle('highlight-fifth')
    : '';

const firstBubble = document.getElementsByClassName('risk-rating-element')[0];
firstBubble.addEventListener('click', () => {
    firstBubble.classList.add('active-risk');
    wrapper.classList.replace('highlight-fifth', 'highlight-first');
});
