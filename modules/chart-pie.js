import Chart from 'chart.js/auto';
import { bgcolors, PieCharts } from './chart';

// Font Settings

Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.legend.display = false;
Chart.defaults.borderColor = 'transparent';
Chart.defaults.plugins.legend.labels.textAlign = 'left';
Chart.defaults.plugins.legend.labels.color = '#000000';
Chart.defaults.font.family = '"VerlagSSm"';
Chart.defaults.font.weight = 'bold';

for (let i = 0; i < PieCharts.length; i++) {
    (async function () {
        let JSONScript = PieCharts[i].getElementsByTagName('script')[0];
        const data = await JSON.parse(JSONScript.textContent);
        console.log(data);

        let datasetlength = data.data.datasets.length;
        for (let i = 0; i < datasetlength; i++) {
            console.log(data.data.datasets[i]);
            data.data.datasets[i] = {
                ...data.data.datasets[i],
                ...{ backgroundColor: bgcolors[i] },
            };
        }

        /* Generate chart with pre-defined config */
        new Chart(PieCharts[i].getElementsByTagName('canvas')[0], {
            type: 'pie',
            data: {
                datasets: data.data.datasets.map((x) => ({
                    label: x.label,
                    backgroundColor: x.backgroundColor,
                    borderColor: x.backgroundColor,
                    data: x.data,
                })),
            },

            // options: {
            //     layout: {
            //         padding: {
            //             left: 15,
            //             right: 40,
            //         },
            //     },
            //     plugins: {
            //         datalabels: {
            //             formatter: function (value, context) {
            //                 return (
            //                     context.chart.data.datasets[0].data[
            //                         context.dataIndex
            //                     ].x + ' % '
            //                 );
            //             },
            //         },
            //     },
            //     indexAxis: 'y',

            //     scales: {
            //         x: {
            //             axis: 'y',
            //             ticks: {
            //                 display: false,
            //             },
            //             grid: {
            //                 display: false,
            //                 drawOnChartArea: false,
            //                 drawBorder: false,
            //                 drawTicks: false,
            //             },

            //             beginAtZero: true,
            //         },
            //         y: {
            //             ticks: {
            //                 callback: function (value) {
            //                     const arr =
            //                         this.getLabelForValue(value).split(' ');

            //                     const newArr = [];
            //                     console.log('array length', arr.length);

            //                     for (i = 0; i < arr.length; i++) {
            //                         console.log('item index', i);
            //                         if (
            //                             arr[i]?.length + arr[i + 1]?.length <
            //                             16
            //                         ) {
            //                             newArr.push(
            //                                 '  ' + arr[i] + ' ' + arr[i + 1]
            //                             );
            //                             i++;
            //                         } else {
            //                             newArr.push('  ' + arr[i]);
            //                         }
            //                     }
            //                     console.log(newArr);
            //                     return newArr;
            //                 },
            //                 crossAlign: 'far',
            //                 padding: 30,
            //             },

            //             grid: {
            //                 display: false,
            //                 drawOnChartArea: false,
            //                 drawBorder: false,
            //                 drawTicks: false,
            //             },

            //             color: '#000000',
            //             align: 'start',
            //         },
            //     },
            // },
        });
    })();
}
