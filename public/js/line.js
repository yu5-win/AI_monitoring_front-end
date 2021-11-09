new Chart(document.getElementById("line-chart"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "걷기",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,2000],
        label: "뛰기",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "계단",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "넘어짐",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "추락",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    responsive: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          color: '#ffffff'
        }
      }],
      yAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          color: '#ffffff'
        }
      }]
    },
  }
});
new Chart(document.getElementById("line-chart1"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "걷기",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,2000],
        label: "뛰기",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "계단",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "넘어짐",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "추락",
        borderColor: "#c45850",
        fill: false
      }
    ]
  },
  options: {
    responsive: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          color: '#ffffff'
        }
      }],
      yAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          color: '#ffffff'
        }
      }]
    },
  }
});
new Chart(document.getElementById("line-chart2"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "CO2",
        borderColor: "red",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,2000],
        label: "VOCs",
        borderColor: "yellow",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "미세먼지",
        borderColor: "blue",
        fill: false
      }
    ]
  },
  options: {
    responsive: false,
    legend: {
      display: false
    },
    scales: {
      xAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          color: '#ffffff'
        }
      }],
      yAxes: [{
        ticks: {
          display: false
        },
        gridLines: {
          display: false,
          color: '#ffffff'
        }
      }]
    },
    
  }
});
