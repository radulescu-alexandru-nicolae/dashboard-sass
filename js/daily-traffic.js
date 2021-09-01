let dailyTraffic = document.querySelector(".daily-chart");
console.log(dailyTraffic);
let trafficDataDayliChart = {

    labels: [
        "S",
        "M",
        "T",
        "W",
        "T",
        "F",
        "S",
    ],

    datasets: [

        {
            data: [50, 100, 150, 100, 250, 200, 100],
            backgroundColor: "rgb(75, 79, 191)",
            borderWith: 1,
            fill: true

        },
    ],
};




let trafficOptionsDaily = {

    plugins: {
        aspectRatio: 2.5,

        animation: {
            duratiom: 0,
        },
        scales: {

            yAxes: [{
                ticks: {
                    beginAtZero: true,
                },
            }, ],
        },
        legend: {
            display: false,
        },

    }
};
let trafficDaily = new Chart(
    dailyTraffic, {
        type: "bar",
        data: trafficDataDayliChart,
        options: trafficOptionsDaily,
    }
);