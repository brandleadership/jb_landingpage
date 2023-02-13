import Chart from 'chart.js/auto';

(async function () {
    /* Grab data from bsi element part input */
    const data = await JSON.parse(document.getElementById('data').textContent);

    console.log(data);

    /*console.log(data.data.datasets.map((x) => x.label));

    console.log(
        data.data.datasets.map((x) => {
            x.data.map((s) => s.y);
        })
    ); */

    /* Define default sets and values */
    const bgcolors = ['#141E55', '#434B77', '#727899', '#A1A5BB', '#D0D2DD'];

    /* const chartTitle = await document.getElementById('chart-title').textContent; */

    // Get data for the dataset (in this case Year and Population)
    let labels = [];

    for (let i = 0; i < length; i++) {
        labels.push(data.data.datasets[i].label);
        /* values.push(data.data[i].Population); */
    }
    console.log(labels);

    let backgroundcolors = [];
    let colorlength = data.data.datasets.length;
    for (let i = 0; i < colorlength; i++) {
        data.data.datasets[i] = {
            ...data.data.datasets[i],
            ...{ backgroundColor: bgcolors[i] },
        };
    }
    console.log(data);

    // Generate chart with pre-defined config
    new Chart(document.getElementById('chart'), {
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
                    /* backgroundColor: bgcolors.map((x) => x), */
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
                        drawBorder: false, // hide the x axis
                    },

                    ticks: {
                        callback: function (value) {
                            return this.getLabelForValue(value).substring(0, 4);
                        },
                        maxTicksLimit: 7,
                        maxRotation: 0,
                        minRotation: 0,
                        color: '#000000',
                    },
                },
                y: {
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
