let mobile = document.querySelector('.mobile-chart');
let colors = ["rgb(75, 79, 191)", "rgb(1, 81, 112)", "rgb(27, 128, 74)"]




//mobile users

let mobileData = {

    labels: ["Desktop", "Tablet", "Phones", ],

    datasets: [

        {
            label: "# of Users",
            data: [2000, 550, 500],
            borderWith: 0,
            backgroundColor: colors,
        },
    ],
};




let mobileOptions = {

    plugins: {
        legend: {
            position: "right",
            labels: {
                boxWidth: 20,
                fontStyle: "bold",
            },
        },
    }
};



let mobileChart = new Chart(
    mobile, {
        type: "doughnut",
        data: mobileData,
        options: mobileOptions
    }
);