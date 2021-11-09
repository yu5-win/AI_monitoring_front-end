
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
new Chart(document.getElementById("line-chart4"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "심박수",
        borderColor: "red",
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

new Chart(document.getElementById("line-chart5"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "심박수",
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

new Chart(document.getElementById("line-chart6"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,3200],
        label: "걷기",
        borderColor: "violet",
        fill: false
      },{ 
        data: [86,114,106,106,107,111,133,221,783,1200],
        label: "뛰기",
        borderColor: "yellow",
        fill: false
      },{ 
        data: [86,114,106,106,107,111,133,221,783,323],
        label: "계단",
        borderColor: "blue",
        fill: false
      },{ 
        data: [86,114,106,106,107,111,133,221,783,3],
        label: "넘어짐",
        borderColor: "green",
        fill: false
      },{ 
        data: [86,114,106,106,107,111,133,221,783,0],
        label: "추락",
        borderColor: "white",
        fill: false
      },
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

new Chart(document.getElementById("line-chart7"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
    datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,123],
        label: "정상",
        borderColor: "red",
        fill: false
      },{ 
        data: [86,114,106,106,107,111,133,221,783,11],
        label: "경고",
        borderColor: "yellow",
        fill: false
      },{ 
        data: [86,114,106,106,107,111,133,221,783,0],
        label: "위험",
        borderColor: "green",
        fill: false
      },
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

new Chart(document.getElementById("line-chart8"), {
  type: 'line',
  data: {
    labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
    datasets: [{ 
        data: [400,400,400,106,107,111,400,221,783,2478],
        label: "CO2",
        borderColor: "violet",
        fill: false
      },{ 
        data: [86,114,106,106,107,300,133,221,200,200],
        label: "VOCs",
        borderColor: "blue",
        fill: false
      },{ 
        data: [86,114,106,106,107,111,133,100,100,100],
        label: "미세먼지",
        borderColor: "green",
        fill: false
      },
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

