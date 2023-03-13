import Chart from 'chart.js/auto';
import { bgcolors, defaultCharts } from './chart';

// Font Settings
Chart.defaults.plugins.legend.labels.textAlign = 'left';
Chart.defaults.plugins.legend.labels.color = '#000000';
Chart.defaults.font.family = '"VerlagSSm"';
Chart.defaults.font.weight = 'bold';

for (let i = 0; i < defaultCharts.length; i++) {
    (async function () {
        /* Grab data from bsi element part input */
        let JSONScript = defaultCharts[i].getElementsByTagName('script')[0];
        const data = await JSON.parse(JSONScript.textContent);

        // Loop over datasets and add the matching color
        let datasetlength = data.data.datasets.length;
        for (let i = 0; i < datasetlength; i++) {
            data.data.datasets[i] = {
                ...data.data.datasets[i],
                ...{ backgroundColor: bgcolors[i] },
            };
        }

        /* Generate chart with pre-defined config */
        new Chart(defaultCharts[i].getElementsByTagName('canvas')[0], {
            type: 'line',
            data: {
                datasets: data.data.datasets.map((x) => ({
                    label: x.label,
                    backgroundColor: x.backgroundColor,
                    borderColor: x.backgroundColor,
                    data: x.data,
                })),
            },
            options: {
                datasets: {
                    line: {
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
                            drawBorder: false,
                        },
                        ticks: {
                            // Only show year not full date
                            callback: function (value) {
                                return this.getLabelForValue(value).substring(
                                    0,
                                    4
                                );
                            },
                            maxTicksLimit: 6,
                            maxRotation: 0,
                            minRotation: 0,
                            color: '#000000',
                            align: 'start',
                        },
                    },
                    y: {
                        offset: true,
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
}
