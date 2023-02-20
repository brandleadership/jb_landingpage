import Chart from 'chart.js/auto';
import { bgcolors } from './chart';

(async function () {
    /* Grab data from bsi element part input */
    const data = await JSON.parse(
        document.getElementById('data-freeform').textContent
    );

    // Loop over datasets and add the matching color
    let datasetlength = data.data.datasets.length;
    for (let i = 0; i < datasetlength; i++) {
        data.data.datasets[i] = {
            ...data.data.datasets[i],
            ...{ backgroundColor: bgcolors[i] },
        };
    }

    /* 
    /* Define Chart Default Values 
    */

    // Interactions
    Chart.defaults.interaction.intersect = false;
    Chart.defaults.interaction.mode = 'index';

    // Scales
    Chart.defaults.scale.display = true;
    Chart.defaults.scales.category.ticks.color = '#000000';
    Chart.defaults.scales.linear.ticks.color = '#000000';

    // Legend Defaults
    Chart.defaults.plugins.legend.display = true;
    Chart.defaults.plugins.legend.position = 'bottom';
    Chart.defaults.plugins.legend.align = 'start';
    Chart.defaults.plugins.legend.labels.boxWidth = 40;
    Chart.defaults.plugins.legend.labels.boxHeight = 2;
    Chart.defaults.plugins.legend.labels.padding = 20;
    Chart.defaults.plugins.legend.labels.textAlign = 'left';
    Chart.defaults.plugins.legend.labels.color = '#000000';

    // Font
    Chart.defaults.font.family = '"VerlagSSm"';
    Chart.defaults.font.weight = 'bold';

    // Generate chart without pre-defined config
    new Chart(document.getElementById('chart-freeform'), data);
})();
