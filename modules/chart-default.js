import Chart from 'chart.js/auto';
import { bgcolors, defaultCharts } from './chart';
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

// Font Settings
Chart.defaults.elements.line.borderWidth = 1;
Chart.defaults.plugins.legend.labels.textAlign = 'left';
Chart.defaults.plugins.legend.labels.color = '#000000';
Chart.defaults.font.family = '"VerlagSSm"';
Chart.defaults.font.weight = 'bold';
Chart.defaults.scales.linear.ticks.callback = function (val) {
    return ' ' + val;
};
Chart.defaults.clip = false;
Chart.defaults.plugins.tooltip.position = 'custom';

Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(255, 255, 255)';
Chart.defaults.plugins.tooltip.borderColor = '#141e55';
Chart.defaults.plugins.tooltip.titleColor = '#141e55';
Chart.defaults.plugins.tooltip.bodyColor = '#141e55';
Chart.defaults.plugins.tooltip.cornerRadius = 2;
Chart.defaults.plugins.tooltip.borderWidth = 1;
Chart.defaults.plugins.tooltip.xAlign = 'center';
Chart.defaults.plugins.tooltip.yAlign = 'bottom';
Chart.defaults.plugins.tooltip.callbacks.title = function (context) {
    let title = context[0].label || '';
    let titleParts = title.split('-');
    return titleParts[2] + '.' + titleParts[1] + '.' + titleParts[0];
};
Chart.defaults.plugins.tooltip.callbacks.label = function (context) {
    return context.formattedValue;
};

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
