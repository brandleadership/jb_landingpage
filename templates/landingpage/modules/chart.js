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

    const chartTitle = await document.getElementById('chart-title').textContent;

    Chart.defaults.font.family = 'VerlagSSm';
    /* Chart.defaults.font.weight = 'bold'; */

    new Chart(document.getElementById('acquisitions'), {
        type: 'line',
        data: {
            labels: data.data.map((row) => row.Year),
            datasets: [
                {
                    label: chartTitle,
                    data: data.data.map((row) => row.Population),
                    backgroundColor: bgcolors.map((row) => row.color),
                    borderColor: bgcolors[0].color,
                    pointRadius: 0,
                    pointStyle: 'circle',
                },
            ],
        },
        options: {
            responsive: true,
            scales: {
                gridLines: {
                    display: false,
                    drawBorder: false,
                },
            },
            scales: {
                x: {
                    border: {
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                },
                y: {
                    border: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    labels: {
                        font: {
                            family: 'VerlagSSm',
                        },
                    },
                },
            },
        },
    });
})();
