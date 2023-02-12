const riskBar = document.getElementsByClassName('risk-bar');
Array.from(riskBar).map((bar) => {
    console.log(bar.classList[1]);
    console.log(bar.classList.contains('highlight-third'));
    const highLight = bar.classList[1];
    switch (highLight) {
        case 'highlight-first':
            document.getElementsByClassName('hidden-text-1')[0].style.display =
                'block';
            break;
        case 'highlight-second':
            document.getElementsByClassName('hidden-text-2')[0].style.display =
                'block';
            break;
        case 'highlight-third':
            document.getElementsByClassName('hidden-text-3')[0].style.display =
                'block';
            break;
        case 'highlight-fourth':
            document.getElementsByClassName('hidden-text-4')[0].style.display =
                'block';
            break;
        case 'highlight-fifth':
            document.getElementsByClassName('hidden-text-5')[0].style.display =
                'block';
            break;
        case 'highlight-sixth':
            document.getElementsByClassName('hidden-text-6')[0].style.display =
                'block';
            break;
        case 'highlight-seventh':
            document.getElementsByClassName('hidden-text-7')[0].style.display =
                'block';
            break;
    }
});
