import { useEffect } from 'react'
import styles from '../styles/Common.module.css'

export default function BioStatus() {

    useEffect(()=>{
        new Chart(document.getElementById("bio-chart1"), {
            type: 'line',
            data: {
              labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
              datasets: [{ 
                  data: [100,99,97,110,95,98,91,90,103,100,105,90,95,102],
                  label: "혈압",
                  borderColor: "rgb(0,176,240)",
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
          new Chart(document.getElementById("bio-chart2"), {
            type: 'line',
            data: {
              labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14],
              datasets: [{ 
                  data: [82,87,85,82,83,87,92,91,90,90,90,89,88,86],
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
                  display: true,
                  ticks: {
                    display: false
                  },
                 
                }],
                yAxes: [{
                  display: true,
                  ticks: {
                    display: false
                  },
                  
                }]
              },
              
            }
          });
          
          new Chart(document.getElementById("bio-chart3"), {
            type: 'line',
            data: {
              labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
              datasets: [{ 
                  data: [86,114,106,106,107,111,133,221,783,478],
                  label: "심박수",
                  borderColor: "rgb(255,192,0)",
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
                  },
                 
                }]
              },
              
            }
          });
    });

    return (
        <>
        <div className={styles.a} style={{width:'33.3%'}}>
          <div>◈ 생체신호: 혈압</div>
          <div className={styles.linechart}>
            <div>
              <canvas id="bio-chart1"></canvas>
            </div>
            <div className={styles.legend}>혈압: 80 ~ 120</div>
          </div>
        </div>
        <div className={styles.a} style={{width:'33.3%'}}>
          <div>◈ 생체신호: 심박수</div>
          <div className={styles.linechart}>
            <div>
              <canvas id="bio-chart2"></canvas>
            </div>
            <div className={styles.legend}>심박수: 80</div>
          </div>
        </div>  
        <div className={styles.a} style={{width:'33.3%'}}>
        <div>◈ 활동량 분석</div>
        <div className={styles.linechart}>
          <div>
            <canvas id="bio-chart3"></canvas>
          </div>
          <div className={styles.legend}>
            <div>걸음수: 7,824</div>
            <div>이동거리: 3.2km</div>
          </div>
        </div>
      </div>     
        </>
    )
}