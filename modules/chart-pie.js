import Chart from 'chart.js/auto';
import { PieCharts } from './chart';

// Font Settings

//Chart.defaults.borderColor = 'transparent';
Chart.defaults.font.family = "'Verlag SSm Book', sans-serif";
Chart.defaults.font.weight = 'bold';

for (let i = 0; i < PieCharts.length; i++) {
    (async function () {
        let JSONScript = PieCharts[i].getElementsByTagName('script')[0];
        const data = await JSON.parse(JSONScript.textContent);

        let datasetlength = data.data.datasets.length;
        for (let i = 0; i < datasetlength; i++) {
            data.data.datasets[i] = {
                ...data.data.datasets[i],
            };
        }

        new Chart(PieCharts[i].getElementsByTagName('canvas')[0], {
            type: 'pie',
            data: {
                labels: data.data.datasets.flatMap((x) =>
                    x.data.map((el) => el.x)
                ),
                datasets: data.data.datasets.map((x) => ({
                    backgroundColor: x.data.map((el) => el.bgc),
                    data: x.data.map((el) => el.y),
                })),
            },

            options: {
                layout: {
                    padding: {
                        bottom: 40,
                        left: 0,
                        right: 0,
                    },
                },
                responsive: true,
                plugins: {
                    legend: {
                        display: false,
                    },
                    tooltip: {
                        position: 'average',
                        yAlign: 'center',
                        backgroundColor: 'rgb(255, 255, 255)',
                        borderColor: '#141e55',
                        titleColor: '#141e55',
                        bodyColor: '#141e55',
                        cornerRadius: 2,
                        borderWidth: 1,
                        xAlign: 'center',
                        yAlign: 'bottom',

                        // callbacks: {
                        //     label: (context) => {
                        //         return context.formattedValue + '%';
                        //     },
                        //     title: (context) => {
                        //         return context.label;
                        //     },
                        // },
                    },
                },
            },
        });
        const legendCallback = function (data) {
            const legendItems = data.data.datasets.flatMap((dataset, i) => {
                const backgroundColors = dataset.data.map((el) => el.bgc);
                const labels = dataset.data.map((el) => el.x);
                const percentage = dataset.data.map((el) => el.y);

                return labels.map((label, j) => {
                    const backgroundColor = backgroundColors[j];
                    const percent = percentage[j];

                    return `
                <li>
                  <div class="legendValue">
  <span class="square" style=" background-color: ${backgroundColor};"></span>
  <span class="percent">${percent}%</span>
  <span class="labels">${label}</span>
</div>
                </li>
                <div class="clear"></div>
            `;
                });
            });

            const legendHTML = `
        <ul class="legend">
            ${legendItems.join('')}
        </ul>
    `;

            return legendHTML;
        };

        document.getElementById('legend').innerHTML = legendCallback(data);
    })();
}
