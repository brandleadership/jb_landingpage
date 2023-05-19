import Chart from 'chart.js/auto';
import { bgcolors, BarCharts } from './chart';

// Font Settings

Chart.defaults.borderColor = 'transparent';

Chart.defaults.font.family = '"VerlagSSm"';
//Chart.defaults.font.weight = 'normal';
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
                })),
            },
            options: {
                barPercentage: 0.4,
                legend: {
                    display: false,
                },
                layout: {
                    padding: {
                        right: 55,
                    },
                },
                plugins: {
                    legend: {
                        display: false,
                    },
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
                },
                indexAxis: 'y',

                scales: {
                    x: {
                        axis: 'y',
                        position: 'top',
                        ticks: {
                            display: true,
                            align: 'center',
                            callback: function (value) {
                                return value + ' %' + '  ';
                            },
                        },
                        grid: {
                            drawOnChartArea: true,

                            color: '#000000',
                        },

                        beginAtZero: true,
                    },
                    y: {
                        ticks: {
                            // mirror: true,
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

                            crossAlign: 'left',
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
