import Chart from 'chart.js/auto';

(async function () {
    const data = await JSON.parse(document.getElementById('data').textContent);

    const bgcolors = [
        { color: '#001489' },
        { color: '#1A2C95' },
        { color: '#3343A1' },
        { color: '#4D5BAD' },
        { color: '#6672B8' },
        { color: '#808AC4' },
        { color: '#99A1D0' },
        { color: '#B3B9DC' },
    ];

    new Chart(document.getElementById('acquisitions'), {
        type: 'bar',
        data: {
            labels: data.data.map((row) => row.Year),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: data.data.map((row) => row.Population),
                    backgroundColor: bgcolors.map((row) => row.color),
                },
            ],
        },
    });
})();
