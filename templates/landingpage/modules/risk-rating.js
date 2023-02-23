//When a highlight is selected in bsi, the highlight class is set to this risk level.
// Now, we have to automatically add a second class which then manages showing the correct text below.

//const bubbles = document.getElementsByClassName('risk-rating-element');
const riskBar = document.getElementsByClassName('risk-bar');
Array.from(riskBar).map((bar) => {
    const bubbles = bar.getElementsByClassName('risk-rating-element');
    Array.from(bubbles).map((bubble) => {
        bubble.addEventListener('click', (event) => {
            Array.from(bubbles).map((bubble) =>
                bubble.classList.remove('active-risk')
            );
            bubble.classList.add('active-risk');
            const bubbleClass = bubble.classList[1];
            const riskBarClass = bar.classList[2];
            bar.classList.replace(riskBarClass, bubbleClass);
        });
    });
});

Array.from(riskBar).map((bar) => {
    const highLight = bar.classList[1];
    switch (highLight) {
        case 'risk-level-one':
            bar.classList.add('highlight-first');
            break;
        case 'risk-level-two':
            bar.classList.add('highlight-second');
            break;
        case 'risk-level-three':
            bar.classList.add('highlight-third');
            break;
        case 'risk-level-four':
            bar.classList.add('highlight-fourth');
            break;
        case 'risk-level-five':
            bar.classList.add('highlight-fifth');
            break;
        case 'risk-level-six':
            bar.classList.add('highlight-sixth');
            break;
        case 'risk-level-seven':
            bar.classList.add('highlight-seventh');
            break;
    }
});
