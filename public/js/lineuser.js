
new Chart(document.getElementById("line-chart3"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100,2150],
    datasets: [{ 
        data: [30,87,50,85,50,81,50,83,50,85,100],
        label: "혈압",
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
