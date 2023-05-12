import Chart from 'chart.js/auto';
import { PieCharts } from './chart';

// Font Settings

Chart.defaults.borderColor = 'transparent';
Chart.defaults.plugins.legend.labels.textAlign = 'left';
Chart.defaults.plugins.legend.labels.color = '#000000';
Chart.defaults.font.family = '"VerlagSSm"';
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
                    padding: 50,
                },
                legend: {
                    display: false,
                },
                responsive: true,

                plugins: {
                    tooltip: {
                        enabled: true,
                        callbacks: {
                            label: function (context) {
                                console.log(context.label);
                                return context.formattedValue + '%';
                            },
                            title: function (context) {
                                console.log(context.formattedValue);
                                return context.label;
                            },
                        },
                    },
                    legend: {
                        display: false,
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
  <span style="display: inline-block; background-color: ${backgroundColor}; width: 25px; height: 25px; vertical-align: middle;"></span>
  <span class="percent" style="display: inline-block; margin-left: 15px; width: 40px; vertical-align: middle;">${percent}%</span>
  <span style="display: inline-block; padding-left: 15px; vertical-align: middle;">${label}</span>
</div>
                </li>
                <div class="clear"></div>&nbsp;
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
