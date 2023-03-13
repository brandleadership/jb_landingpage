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
        case 'risk-level-1':
            bar.classList.add('highlight-first');
            break;
        case 'risk-level-2':
            bar.classList.add('highlight-second');
            break;
        case 'risk-level-3':
            bar.classList.add('highlight-third');
            break;
        case 'risk-level-4':
            bar.classList.add('highlight-fourth');
            break;
        case 'risk-level-5':
            bar.classList.add('highlight-fifth');
            break;
        case 'risk-level-6':
            bar.classList.add('highlight-sixth');
            break;
        case 'risk-level-7':
            bar.classList.add('highlight-seventh');
            break;
    }
});
