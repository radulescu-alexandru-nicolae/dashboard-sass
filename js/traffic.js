const trafficCanvas = document.querySelector('.traffic-chart');
console.log(trafficCanvas);
let trafficData = {

    labels: [
        "16-22",
        "23-29",
        "30-5",
        "6-12",
        "13-19",
        "20-26",
        "27-3",
        "4-10",
        "11-17",
        "18-24",
        "25-31"
    ],

    datasets: [

        {
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: "rgba(116,119,191,.3)",
            borderWith: 1,
            fill: true

        },
    ],
};




let trafficOptions = {

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
let trafficChart = new Chart(
    trafficCanvas, {
        type: "line",
        data: trafficData,
        options: trafficOptions,
    }
);


const ul = document.querySelector('.traffic ul');
const li = ul.querySelectorAll('li');
ul.addEventListener('click', (e) => {
    if (e.target.tagName = 'Li') {
        e.target.style.backgroundColor = "rgb(83, 245, 86)";
        e.target.style.color = "white";
        removeBackground(e.target);
        trafficChart.destroy();
        if (e.target.textContent === 'Hourly') {
            trafficData = {

                labels: [
                    "08-10",
                    "10:12",
                    "12:14",
                    "14:16",
                    "16:18",
                    "18:20",
                    "20:22",
                    "22:24",
                ],

                datasets: [

                    {
                        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850],
                        backgroundColor: "rgba(116,119,191,.3)",
                        borderWith: 1,
                        fill: true

                    },
                ],
            };



        } else if (e.target.textContent === 'Daily') {

            trafficData = {

                labels: [
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat",
                    "Sun",
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ],

                datasets: [

                    {
                        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
                        backgroundColor: "rgba(116,119,191,.3)",
                        borderWith: 1,
                        fill: true

                    },
                ],
            };


        } else if (e.target.textContent === 'Weekly') {
            let trafficData = {

                labels: [
                    "16-22",
                    "23-29",
                    "30-5",
                    "6-12",
                    "13-19",
                    "20-26",
                    "27-3",
                    "4-10",
                    "11-17",
                    "18-24",
                    "25-31"
                ],

                datasets: [

                    {
                        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
                        backgroundColor: "rgba(116,119,191,.3)",
                        borderWith: 1,
                        fill: true

                    },
                ],
            };


        } else if (e.target.textContent === 'Monthly') {
            trafficData = {
                labels: [
                    "JAN",
                    "FEB",
                    "MAR",
                    "APR",
                    "MAY",
                    "JUN",
                    "JUL",
                    "AUG",
                    "SEP",
                    "OCT",
                    "NOV",
                    "DEC",
                ],
                datasets: [

                    {
                        data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500, 3200],
                        backgroundColor: "rgba(116,119,191,.3)",
                        borderWith: 1,
                        fill: true

                    },
                ],
            };

        }
        trafficChart = new Chart(
            trafficCanvas, {
                type: "line",
                data: trafficData,
                options: trafficOptions,
            }
        );
    }
})

function removeBackground(element) {
    li.forEach(lista => {
        if (lista.textContent !== element.textContent) {
            lista.style.background = "white";
            lista.style.color = "black";
        }
    })
}