
var sidebarOpen = false;
var sidebar = document.getElementById("sidebar");

function openSidebar() {
    if (!sidebarOpen) {
        sidebar.classList.add("sidebar-responsive");
        sidebarOpen = true;

    }
}

function closeSidebar() {
    if (sidebarOpen) {
        sidebar.classList.remove("sidebar-responsive");
        sidebarOpen = false;
    }
}


var barChartOptions = {
    series: [{
        data: [10, 8, 6, 4, 2],
        name: "Products",
    }],
    chart: {
        type: "bar",
        background: "transparent",
        height: 350,
        toolbar: {
            show: false,
        },
    },

    plotOptions: {
        bar: {
            distributed: true,
            borderRadius: 4,
            horizontal: false,
            columnWidth: "40%",
        }
    },
    dataLabels: {
        enabled: false,
    },
    fill: {
        opacity: 1,
    },

    grid: {
        borderColor: "grey",
        yaxis: {
            lines: {
                show: true,
            },
        },

        xaxis: {
            lines: {
                show: true,
            },
        },
    },

    legend: {
        labels: {
            colors: "grey",
        },
        show: true,
        position: "top",
    },
    stroke: {
        colors: ["transparent"],
        show: true,
        width: 2
    },
    tooltip: {
        shared: true,
        intersect: false,
        theme: "dark",
    },
    xaxis: {
        categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
        title: {
            style: {
                color: "grey",
            },
        },

        axisBorder: {
            show: true,
            color: "black",
        },

        axisTicks: {
            show: true,
            color: "grey",
        },
        labels: {
            style: {
                colors: "grey",
            },
        },
    },
    yaxis: {
        title: {
            text: "Count",
            style: {
                color: "grey",
            },
        },
        axisBorder: {
            color: "grey",
            show: true,
        },
        axisTicks: {
            color: "black",
            show: true,
        },
        labels: {
            style: {
                colors: "black",
            },
        },
    }
};

var barChart = new ApexCharts(document.querySelector("#bar-chart"), barChartOptions);
barChart.render();











