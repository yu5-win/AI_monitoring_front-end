import styles from '../styles/Common.module.css'
import Chart from 'chart.js'
import { useEffect } from 'react'

export default function DataStat() {

    useEffect(()=>{
        new Chart(document.getElementById("data-chart1"), {
            type: 'line',
            data: {
              labels: [1,2,3,4,5,6,7,9,10,11,12,13],
              datasets: [{ 
                  data: [120, 79,87,80,85,98,81,80,83,80,85,90],
                  label: "Gyro",
                  borderColor: "rgb(255, 192, 0)",
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
                  display: true, 
                  ticks: {
                    display: false
                  },
                  
                }],
                yAxes: [{
                    display: true,  
                    ticks: {
                      display: false
                    }
                  }]
              },
            }
          });

          new Chart(document.getElementById("data-chart2"), {
            type: 'line',
            data: {
              labels: [1,2,3,4,5,6,7,9,10,11,12,13],
              datasets: [{ 
                  data: [100,121,22,80,115,98,130,80,110,80,100,90],
                  label: "Gyro",
                  borderColor: "rgb(0, 176, 240)",
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
                  display: true, 
                  ticks: {
                    display: false
                  },
                  
                }],
                yAxes: [{
                    display: true,  
                    ticks: {
                      display: false
                    }
                  }]
              },
            }
          });  
          
          new Chart(document.getElementById("data-chart3"), {
            type: 'line',
            data: {
              labels: [1,2,3,4,5,6,7,9,10,11,12,13],
              datasets: [{ 
                  data: [80,121,140,80,110,80,100,90,115,98,130,80],
                  label: "Gyro",
                  borderColor: "rgb(34, 177, 76)",
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
                  display: true, 
                  ticks: {
                    display: false
                  },
                  
                }],
                yAxes: [{
                    display: true,  
                    ticks: {
                      display: false
                    }
                  }]
              },
            }
          });                    
    });

    return (
        <>
            <div className={styles.a} style={{width: '33.3%'}} >
                <div>◈ 데이터 수집 현황: Gyro Sensor, 위치 데이터</div>
                <div className={styles.linechart}>
                    <div><canvas id="data-chart1"></canvas></div>
                    <div className={styles.legend}>수집데이터: 1,204건</div>
                </div>
            </div>
            <div className={styles.a} style={{width: '33.3%'}} >
                <div>◈ 데이터 수집: 생체신호</div>
                <div className={styles.linechart}>
                    <div><canvas id="data-chart2"></canvas></div>
                    <div className={styles.legend}>수집데이터: 1,204건</div>
                </div>                
            </div>
            <div className={styles.a} style={{width: '33.3%'}} >
                <div>◈ 데이터 수집: 공기질 데이터</div>
                <div className={styles.linechart}>
                    <div><canvas id="data-chart3"></canvas></div>
                    <div className={styles.legend}>수집데이터: 1,204건</div>
                </div>
                
            </div>
        </>
    )
}