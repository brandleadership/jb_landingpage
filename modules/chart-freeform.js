import Chart from 'chart.js/auto';
import { bgcolors, freeformCharts } from './chart';

Chart.defaults.font.family = "'Verlag SSm Book', sans-serif";

(async function () {
    for (let i = 0; i < freeformCharts.length; i++) {
        /* Grab data from bsi element part input */
        let JSONScript = freeformCharts[i].getElementsByTagName('script')[0];
        const data = await JSON.parse(JSONScript.textContent);

        // Loop over datasets and add the matching color
        let datasetlength = data.data.datasets.length;
        for (let i = 0; i < datasetlength; i++) {
            data.data.datasets[i] = {
                ...data.data.datasets[i],
                ...{ backgroundColor: bgcolors[i] },
            };
        }

        // Generate chart without pre-defined config
        new Chart(freeformCharts[i].getElementsByTagName('canvas')[0], data);
    }
})();
