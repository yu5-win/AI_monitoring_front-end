new Chart(document.getElementById("doughnut-chart1"),{
  type: 'doughnut',
  data: {
    datasets: [{
      data: [20,80],
      backgroundColor: [
        'rgb(255, 99, 132)'
      ],
    }],
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
