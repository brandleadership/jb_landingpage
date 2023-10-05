import Chart from 'chart.js/auto';
import { bgcolors, BarCharts } from './chart';

for (let i = 0; i < BarCharts.length; i++) {
    (async function () {
        /* Grab data from bsi element part input */
        let JSONScript = BarCharts[i].getElementsByTagName('script')[0];
        const data = await JSON.parse(JSONScript.textContent);
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
                indexAxis: 'y',
                responsive: true,
                barPercentage: 0.4,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: '#141e55',
                        titleColor: '#141e55',
                        bodyColor: '#141e55',
                        cornerRadius: 2,
                        borderWidth: 1,
                        position: 'average',
                        yAlign: 'right',
                        xAlign: 'center',
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
                scales: {
                    x: {
                        position: 'top',
                        ticks: {
                            display: true,
                            align: 'center',
                            color: '#000000',
                            callback: function (value) {
                                return value + ' %' + '  ';
                            },
                        },
                        grid: {
                            drawOnChartArea: true,
                            color: '#000000',
                        },
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
                            color: '#000000',
                            crossAlign: 'left',
                            beginAtZero: true,
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
