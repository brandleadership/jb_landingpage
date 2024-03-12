import Chart from 'chart.js/auto';
import { bgcolors, indexedCharts } from './chart';
import { Tooltip } from 'chart.js';

Tooltip.positioners.custom = function (elements) {
    if (!elements.length) {
        return false;
    }
    var offset = 10;

    return {
        x: elements[0].element.x,
        y: elements[0].element.y - offset,
    };
};

for (let i = 0; i < indexedCharts.length; i++) {
    (async function () {
        /* Grab data from bsi element part input */
        let JSONScript = indexedCharts[i].getElementsByTagName('script')[0];
        const data = await JSON.parse(JSONScript.textContent);

        // Loop over datasets and add the matching color
        let datasetlength = data.data.datasets.length;
        for (let i = 0; i < datasetlength; i++) {
            data.data.datasets[i] = {
                ...data.data.datasets[i],
                ...{ backgroundColor: bgcolors[i] },
            };

            //calculating indexed data
            let product = 1;
            data.data.datasets[i].data.map((item) => {
                product = product * (item.y / 100 + 1);

                item.y = (product - 1) * 100;
            });
        }

        /* Generate chart with pre-defined config */
        new Chart(indexedCharts[i].getElementsByTagName('canvas')[0], {
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
                clip: false,
                datasets: {
                    line: {
                        borderWidth: 1,
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
                            callback: function (val) {
                                return ' ' + val;
                            },
                            // Only show year not full date
                            callback: function (value) {
                                const curLabel =
                                    this.getLabelForValue(value).substring(
                                        5,
                                        7
                                    ) +
                                    '.' +
                                    this.getLabelForValue(value).substring(
                                        0,
                                        4
                                    );

                                return curLabel;
                            },
                            maxTicksLimit: 5,
                            maxRotation: 0,
                            minRotation: 0,
                            color: '#000000',
                            align: 'start',
                        },
                    },
                    y: {
                        beginAtZero: true,
                        offset: true,
                        border: {
                            display: false,
                        },
                        grid: {
                            display: true,
                            drawOnChartArea: true,
                            color: '#D0D2DE',
                        },
                        ticks: {
                            color: '#000000',
                        },
                    },
                },
                plugins: {
                    tooltip: {
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: '#141e55',
                        titleColor: '#141e55',
                        bodyColor: '#141e55',
                        cornerRadius: 2,
                        borderWidth: 1,
                        position: 'custom',
                        xAlign: 'center',
                        yAlign: 'bottom',
                        callbacks: {
                            title: (context) => {
                                let title = context[0].label || '';
                                let titleParts = title.split('-');
                                return (
                                    titleParts[2] +
                                    '.' +
                                    titleParts[1] +
                                    '.' +
                                    titleParts[0]
                                );
                            },
                            label: (context) => {
                                return context.formattedValue;
                            },
                        },
                    },
                    colors: {
                        enabled: false,
                    },
                    legend: {
                        display: true,
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
                                family: "'Verlag SSm Book', sans-serif",
                            },
                        },
                    },
                },
            },
        });
    })();
}
