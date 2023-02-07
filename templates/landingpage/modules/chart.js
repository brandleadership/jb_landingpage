import Chart from 'chart.js/auto';

(async function () {
    /* Grab data from bsi element part input */
    const data = await JSON.parse(document.getElementById('data').textContent);

    /* Define default sets and values */
    const bgcolors = ['#141E55', '#434B77', '#727899', '#A1A5BB', '#D0D2DD'];

    /* const chartTitle = await document.getElementById('chart-title').textContent; */

    // Generate chart with pre-defined config
    new Chart(document.getElementById('chart'), {
        type: 'line',
        data: {
            datasets: data.data.datasets.map((x) => x),
        },
        options: {
            datasets: {
                line: {
                    borderColor: bgcolors,
                    pointBackgroundColor: bgcolors[0],
                    pointBorderColor: bgcolors[0],
                    pointRadius: 0,
                    pointStyle: 'circle',
                },
            },
            interaction: {
                intersect: false,
                mode: 'index',
            },
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    border: {
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                    ticks: {
                        color: '#000000',
                    },
                },
                y: {
                    border: {
                        display: false,
                    },
                    ticks: {
                        color: '#000000',
                    },
                },
            },
            plugins: {
                colors: {
                    enabled: false,
                },
                legend: {
                    maxWidth: 10,
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        boxWidth: 40,
                        boxHeight: 2,
                        textAlign: 'left',
                        padding: 10,
                        boxPadding: 0,
                        color: '#000000',
                        font: {
                            family: 'VerlagSSm',
                        },
                    },
                },
            },
        },
    });
})();
