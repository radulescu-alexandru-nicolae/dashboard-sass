export default class Main{
    constructor(){
        this.container=document.querySelector('.container');
        this.setMain();
        this.mainFunction();
    }

    setMain=()=>{
        const main=document.createElement('main');
        main.innerHTML=
        `
        <section class="main-header">
        <h1>Dashboard</h1>
        <input type="text">
    </section>
    <section class="alerta">
        <p><strong>Alerta:</strong>You have unreaded messages</p>
    </section>
    <section class="charts">
        <section class="traffic">
            <div class="container-diagram">
                <div class="traffic-header">
                    <h2>Traffic</h2>
                    <ul class="butttons-traffic">
                        <li class="modify">Hourly</li>
                        <li class="modify">Daily</li>
                        <li class="modify">Weekly</li>
                        <li class="modify">Monthly</li>
                    </ul>
                </div>
                <div class="traffic-widget">
                    <canvas class="traffic-chart"></canvas>
                </div>
            </div>
        </section>
        <div class="container-daily-mobile">
            <section class="traffic">
                <div class="container-diagram">
                    <div class="traffic-header">
                        <h2>Daily Traffic</h2>

                    </div>
                    <div class="traffic-daily">
                        <canvas class="daily-chart"></canvas>
                    </div>
                </div>
            </section>
            <section class="traffic">
                <div class="container-diagram">
                    <div class="traffic-header">
                        <h2>Mobile Users</h2>
                    </div>
                    <div class="traffic-mobile">
                        <canvas class="mobile-chart"></canvas>
                    </div>
                </div>
            </section>
        </div>

        <section class="traffic">
            <div class="container-diagram">
                <div class="traffic-header">
                    <h2>Social Stats</h2>
                </div>
                <section class="social-stats">
                    <section class="facebook socializare">
                        <i class="fab fa-facebook"></i>
                        <div class="text-socializare">
                            <p>Facebook</p>
                            <h3>10,320</h3>
                        </div>
                    </section>
                    <section class="instagram socializare">
                        <i class="fab fa-instagram"></i>
                        <div class="text-socializare">
                            <p>Facebook</p>
                            <h3>10,320</h3>
                        </div>
                    </section>
                    <section class="twitter socializare">
                        <i class="fab fa-instagram"></i>
                        <div class="text-socializare">
                            <p>Facebook</p>
                            <h3>10,320</h3>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    </section>
    <div class="container-members-both">
        <section class="members">
            <div class="container-members">
                <div class="header-members">
                    <h2>New Members</h2>
                </div>
                <section class="persoane persoane-members">
                    <div class="persoana">
                        <div class="container-detalii-persoana">
                            <img src="images/member-1.jpg" alt="">
                            <div cass="text-persoana">
                                <p>Victoria Chambers</p>
                                <a href="">victoria.chambers80@example.com</a>
                            </div>
                        </div>

                        <p>10/15/20</p>
                    </div>
                    <div class="persoana">
                        <div class="container-detalii-persoana">
                            <img src="images/member-1.jpg" alt="">
                            <div cass="text-persoana">
                                <p>Dale Byrd</p>
                                <a href="">dale.byrd52@example.com</a>
                            </div>
                        </div>
                        <p>10/15/20</p>
                    </div>
                    <div class="persoana">
                        <div class="container-detalii-persoana">
                            <img src="images/member-1.jpg" alt="">
                            <div cass="text-persoana">
                                <p>Dawn Wood</p>
                                <a href="">dawn.wood16@example.com</a>
                            </div>
                        </div>
                        <p>10/15/20</p>
                    </div>
                    <div class="persoana">
                        <div class="container-detalii-persoana">
                            <img src="images/member-1.jpg" alt="">
                            <div cass="text-persoana">
                                <p>Dan Oliver</p>
                                <a href="">dan.oliver82@example.com</a>
                            </div>
                        </div>
                        <p>10/15/20</p>
                    </div>
                </section>
            </div>
        </section>
        <section class="recent-activity members">
            <div class="container-members">
                <div class="header-members">
                    <h2>Recent Activity</h2>
                </div>
                <section class="persoane persoane-activity">
                    <div class="persoana">
                        <img src="images/member-1.jpg" alt="">
                        <div class="activity-text">
                            <p class="post">Victoria Chambers commented on <strong>WebApp's SEO Tips</strong></p>
                            <p>4 hours ago</p>
                        </div>
                    </div>
                    <div class="persoana">
                        <img src="images/member-1.jpg" alt="">
                        <div class="activity-text">
                            <p class="post">Dale Byrd liked the post <strong>Facebok's Changes for 2021</strong></p>
                            <p>4 hours ago</p>
                        </div>
                    </div>
                    <div class="persoana">
                        <img src="images/member-1.jpg" alt="">
                        <div class="activity-text">
                            <p class="post">Dawn Wood commented on <strong>Facebook's Changes for 2021</strong></p>
                            <p>4 hours ago</p>
                        </div>
                    </div>
                    <div class="persoana">
                        <img src="images/member-1.jpg" alt="">
                        <div class="activity-text">
                            <p class="post">Dan Oliver posted <strong>WebApp's SEO Tips</strong></p>
                            <p>4 hours ago</p>
                        </div>
                    </div>

                </section>
            </div>
        </section>
    </div>
    <div class="message-settings">
        <section class="message">
            <div class="container-message">
                <div class="header-message">
                    <h2>Message user</h2>
                </div>
                <form action="">
                    <input type="text" id="Search" placeholder="Search for User">

                    <textarea name="Message" id="Message" placeholder="Message for user"></textarea>
                    <button>SEND</button>

                </form>
            </div>
        </section>

        <section class="settings">
            <div class="container-settings">
                <div class="header-settings">
                    <h2>Settings</h2>
                </div>
                <div class="buttoane">
                    <div class="email b1">
                        <p>Sent Email Notifications</p>
                        <button>ON</button>
                    </div>
                    <div class="profile b1">
                        <p>Set Profile to Public</p>
                        <button>On</button>
                    </div>
                </div>
                <form action="" class="time-form">
                    <div class="time-zone">
                        <select name="timeZone" id="timeZone" placeholder="Select">
                    <option  value="SelectTimeZone" hidden >Select Time Zone</option>
                    <option value="Romania">Romania</option>
                    <option value="America">America</option>
                    <option value="Europa">Europa</option>
                    </select>
                    </div>

                    <div class="save">
                        <button>save</button>
                        <button>cancel</button>
                    </div>
                </form>

            </div>
        </section>
    </div>
    </div>
        `;
        this.container.appendChild(main);
    }

    mainFunction=()=>{
        let dailyTraffic = document.querySelector(".daily-chart");
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
const trafficCanvas = document.querySelector('.traffic-chart');
let trafficData = [{

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

    }, {

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
    },
    {

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
    },

    {
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
        ]
    },

    {
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

    }


];
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

    },
};
let trafficChart = new Chart(
    trafficCanvas, {
        type: "line",
        data: trafficData[0],
        options: trafficOptions,
    }
);
const ul = document.querySelector('.traffic ul');
const li = ul.querySelectorAll('li');
ul.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.backgroundColor = "rgb(83, 245, 86)";
        e.target.style.color = "white";
        removeBackground(e.target);
        trafficChart.destroy();
        trafficChart = new Chart(
            trafficCanvas, {
                type: "line",
                data: trafficData[0],
                options: trafficOptions,
            }
        );
        if (e.target.textContent === 'Hourly') {
            trafficCanvas.data = trafficData[0];
            trafficCanvas.options = trafficOptions;

        } else if (e.target.textContent === 'Daily') {
            trafficCanvas.data = trafficData[1];
            trafficCanvas.options = trafficOptions;



        } else if (e.target.textContent === 'Weekly') {

            trafficCanvas.data = trafficData[2];
            trafficCanvas.options = trafficOptions;

        } else if (e.target.textContent === 'Monthly') {
            trafficCanvas.data = trafficData[3];
            trafficCanvas.options = trafficOptions;
        };
    }



});

function removeBackground(element) {
    li.forEach(lista => {
        if (lista.textContent !== element.textContent) {
            lista.style.background = "white";
            lista.style.color = "black";
        }
    })
}
    }
}