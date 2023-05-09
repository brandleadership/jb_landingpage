import Chart from 'chart.js/auto';
import { bgcolors, BarCharts } from './chart';
import ChartDataLabels from 'chartjs-plugin-datalabels';

// Chart.register(ChartDataLabels);
// Font Settings

//Chart.defaults.plugins.legend.display = false;
Chart.defaults.plugins.legend.display = false;
Chart.defaults.borderColor = 'transparent';
// Chart.defaults.plugins.legend.labels.textAlign = 'left';
// Chart.defaults.plugins.legend.labels.color = '#000000';
Chart.defaults.font.family = '"VerlagSSm"';
Chart.defaults.font.weight = 'bold';
Chart.defaults.scales.linear.ticks.callback = function (val) {
    return ' ' + val;
};

for (let i = 0; i < BarCharts.length; i++) {
    (async function () {
        /* Grab data from bsi element part input */
        let JSONScript = BarCharts[i].getElementsByTagName('script')[0];
        const data = await JSON.parse(JSONScript.textContent);
        // console.log(data, 'bar');
        //Loop over datasets and add the matching color
        let datasetlength = data.data.datasets.length;
        for (let i = 0; i < datasetlength; i++) {
            data.data.datasets[i] = {
                ...data.data.datasets[i],
                ...{ backgroundColor: bgcolors[i] },
            };
        }

        /* Generate chart with pre-defined config */
        new Chart(BarCharts[i].getElementsByTagName('canvas')[0], {
            type: 'bar',
            data: {
                datasets: data.data.datasets.map((x) => ({
                    label: x.label,
                    backgroundColor: x.backgroundColor,
                    borderColor: x.backgroundColor,
                    data: x.data.map(({ x, y }) => {
                        const newObj = {
                            x: y,
                            y: x,
                        };
                        return newObj;
                    }),
                    datalabels: {
                        color: '#141E55',
                        anchor: 'end',
                        align: 'right',
                        labels: {
                            title: {
                                font: {
                                    weight: '900',
                                },
                            },
                        },
                    },
                })),
            },

            plugins: [ChartDataLabels],
            options: {
                legend: {
                    display: false,
                },
                layout: {
                    padding: {
                        left: 15,
                        right: 50,
                    },
                },
                plugins: {
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function (context) {
                                return context.formattedValue + '%';
                            },
                            title: function (context) {
                                return context.label;
                            },
                        },
                    },
                    datalabels: {
                        formatter: function (value, context) {
                            return (
                                context.chart.data.datasets[0].data[
                                    context.dataIndex
                                ].x + ' % '
                            );
                        },
                    },
                },
                indexAxis: 'y',

                scales: {
                    x: {
                        axis: 'y',
                        position: 'top',
                        ticks: {
                            display: true,

                            callback: function (value) {
                                return value + ' %' + '  ';
                            },
                        },
                        grid: {
                            // display: true,
                            drawOnChartArea: true,
                            // drawBorder: false,
                            color: '#000000',
                        },

                        beginAtZero: true,
                    },
                    y: {
                        ticks: {
                            callback: function (value) {
                                const arr =
                                    this.getLabelForValue(value).split(' ');

                                const newArr = [];

                                for (i = 0; i < arr.length; i++) {
                                    if (
                                        arr[i]?.length + arr[i + 1]?.length <
                                        16
                                    ) {
                                        newArr.push(
                                            '  ' + arr[i] + ' ' + arr[i + 1]
                                        );
                                        i++;
                                    } else {
                                        newArr.push('  ' + arr[i]);
                                    }
                                }

                                return newArr;
                            },

                            crossAlign: 'far',
                            padding: 30,
                        },

                        grid: {
                            display: false,
                            drawOnChartArea: false,
                            drawBorder: false,
                            drawTicks: false,
                        },

                        color: '#000000',
                        align: 'start',
                    },
                },
            },
        });
    })();
}
