import { getJSONData } from "./data.js";

// SIDEBAR TOGGLE
let sidebarOpen = false;
let sidebar = document.getElementById("sidebar");
let charts = document.getElementsByClassName("charts");

const openSidebar = () => {
  if (!sidebarOpen) {
    sidebar.classList.add("sidebar-responsive");
    sidebarOpen = true;
  }
};

const closeSidebar = () => {
  if (sidebarOpen) {
    sidebar.classList.remove("sidebar-responsive");
    sidebarOpen = false;
  }
};

const focusOnSidebar = () => {
  if (sidebarOpen) {
    sidebar.style.zIndex = 1;
    charts.style.zIndex = -1;
  }
};

// -------- CHARTS --------

// BAR CHART

const ctx = document.getElementById("bar-chart2");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// -------------------------------------------------

let barChartOptions = {
  series: [
    44, 44, 44, 44, 44,
    //...
  ],
  chart: {
    type: "bar",
    height: 350,
    toolbar: {
      show: false,
    },
  },
  colors: ["#246dec", "#cc3c43", "#367952", "#f5b74f", "#4f35a1"],
  plotOptions: {
    bar: {
      distrubted: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: "40%",
    },
  },
  dataLabels: {
    enabled: false,
  },
  legend: {
    show: false,
  },
  xaxis: {
    categories: ["Laptop", "Phone", "Monitor", "Headphones", "Camera"],
  },
  yaxis: {
    title: {
      text: "Count",
    },
  },
};

let barChart = new ApexCharts(
  document.querySelector("#bar-chart"),
  barChartOptions
);
barChart.render();

let jsonData = getJSONData();
console.log(jsonData);

barChart.updateSeries([
  {
    name: "Sales",
    data: jsonData,
  },
]);

// AREA CHART

let areaChartOptions = {
  series: [
    {
      name: "Purchase Orders",
      data: [33, 45, 11, 89, 55, 100, 67],
    },
    {
      name: "Sales Orders",
      data: [13, 34, 48, 33, 45, 51, 67],
    },
  ],
  chart: {
    height: 350,
    type: "area",
    toolbar: {
      show: false,
    },
  },
  colors: ["#4f35a1", "#246dec"],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },

  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  markers: {
    size: 0,
  },
  yaxis: [
    {
      title: {
        text: "Purchase Orders",
      },
    },
    {
      opposite: true,
      title: {
        text: "Sales Orders",
      },
    },
  ],
};

let areaChart = new ApexCharts(
  document.querySelector("#area-chart"),
  areaChartOptions
);
areaChart.render();
