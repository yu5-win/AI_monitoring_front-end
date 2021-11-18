new Chart(document.getElementById("doughnut-chart7"),{
  type: 'doughnut',
  data: {
    datasets: [{
      data: [89,11],
      backgroundColor: [
        'rgb(99, 255, 132)'
      ],
    }],
    
    labels: [
      'Red',
    ]
  },
  options: {
    responsive: false,
    legend: {
      display: false,
    },
    rotation: 0.8 * Math.PI,
    circumference: 1.4 * Math.PI,
    cutoutPercentage: 80,
    tooltips: {enabled: false},
  }
});
