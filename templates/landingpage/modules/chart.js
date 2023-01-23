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

    Chart.defaults.datasets.line.hoverBackgroundColor = '#ffffff';

    // Interactions
    Chart.defaults.interaction.intersect = false;
    Chart.defaults.interaction.mode = 'index';

    // Scales
    Chart.defaults.scale.display = true;
    // TODO: Add more scale styles to match the design in figma

    // Line Styles
    //Chart.defaults.datasets.line.borderColor;
    //Chart.defaults.datasets.line.stepped = false;
    Chart.defaults.datasets.line.borderWidth = 2;
    Chart.defaults.datasets.line.backgroundColor = () => {
        return '#eee';
    };
    // TODO: Add more default line styles
    // Line styles default

    // Legend Defaults
    Chart.defaults.plugins.legend.display = true;
    Chart.defaults.plugins.legend.position = 'bottom';
    Chart.defaults.plugins.legend.align = 'start';
    Chart.defaults.plugins.legend.labels.boxWidth = 40;
    Chart.defaults.plugins.legend.labels.boxHeight = 4;
    Chart.defaults.plugins.legend.labels.textAlign = 'left';

    // Font
    Chart.defaults.font.family = '"VerlagSSm"';
    Chart.defaults.font.weight = 'bold';
    // TODO: Change text color to black

    // Predefined Chart Config
    new Chart(document.getElementById('blubb'), {
        type: 'line',
        data: {
            labels: data.data.datasets[1].data.map((row) => row.x),
            datasets: [
                {
                    label: chartTitle,
                    data: data.data.datasets[1].data.map((row) => row.y),
                    backgroundColor: bgcolors.map((row) => row.color),
                    /* borderColor: bgcolors[0].color, */
                    borderColor: '#162056',
                    pointRadius: 0,
                    pointStyle: 'circle',
                },
            ],
        },
        options: {
            interaction: {
                intersect: false,
                mode: 'index',
            },
            responsive: true,
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
                    maxWidth: 10,
                    position: 'bottom',
                    align: 'start',
                    labels: {
                        boxWidth: 40,
                        boxHeight: 2,
                        textAlign: 'left',
                        padding: 0,
                        boxPadding: 0,
                        font: {
                            family: 'VerlagSSm',
                        },
                    },
                },
            },
        },
    });

    new Chart(document.getElementById('chart'), data);
})();
