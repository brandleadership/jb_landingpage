import Chart from 'chart.js/auto';

(async function () {
    const data = [
        { year: 2010, count: 10 },
        { year: 2011, count: 20 },
        { year: 2012, count: 15 },
        { year: 2013, count: 25 },
        { year: 2014, count: 22 },
        { year: 2015, count: 30 },
        { year: 2016, count: 28 },
    ];

    const bgcolors = [
        { color: '#001489' },
        { color: '#1A2C95' },
        { color: '#3343A1' },
        { color: '#4D5BAD' },
        { color: '#6672B8' },
        { color: '#808AC4' },
        { color: '#99A1D0' },
        { color: '#B3B9DC' },
    ];

    new Chart(document.getElementById('acquisitions'), {
        type: 'bar',
        data: {
            labels: data.map((row) => row.year),
            datasets: [
                {
                    label: 'Acquisitions by year',
                    data: data.map((row) => row.count),
                    backgroundColor: bgcolors.map((row) => row.color),
                },
            ],
        },
    });
})();
