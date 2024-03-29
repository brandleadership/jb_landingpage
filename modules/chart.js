/* Define default sets and values */
export const bgcolors = ['#141E55', '#727899', '#D0D2DD'];

const mainContainer = document.getElementById('main');

export const defaultCharts =
    mainContainer.getElementsByClassName('chart-default');

export const freeformCharts =
    mainContainer.getElementsByClassName('chart-freeform');

export const indexedCharts =
    mainContainer.getElementsByClassName('chart-indexed');

export const BarCharts = mainContainer.getElementsByClassName(
    'horizontal-bar-chart'
);

export const PieCharts = mainContainer.getElementsByClassName('pie-chart');
