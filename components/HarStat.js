import styles from '../styles/Common.module.css'
import Chart from 'chart.js'
import { useEffect } from 'react'

export default function HarStat({width, height}) {

    useEffect(() => {
        new Chart(document.getElementById("line-chart"), {
            type: 'line',
            data: {
              labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
              datasets: [{ 
                  data: [86,114,106,106,107,111,133,221,783,2478],
                  label: "이동",
                  borderColor: "#3e95cd",
                  fill: false
                }, { 
                  data: [282,350,411,502,635,809,947,1402,3700,2000],
                  label: "멈춤",
                  borderColor: "#8e5ea2",
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
                  display: true, 
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: true,
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.0)",
                    zeroLineColor: "rgba(200, 200, 200, 255)",
                    zeroLineBorderDash: [0],
                    zeroLineBorderDashOffset: [0],
                  }
                }],
                yAxes: [{
                  display: true,  
                  ticks: {
                    display: false
                  },
                  gridLines: {
                    display: true,
                    borderDash: [2],
                    borderDashOffset: [2],
                    color: "rgba(33, 37, 41, 0.0)",
                    zeroLineColor: "rgba(200, 200, 200, 255)",
                    zeroLineBorderDash: [0],
                    zeroLineBorderDashOffset: [0],
                  }
                }]
              },
            }
          })
    });

    return (
        <>
            <div className={styles.a} style={{width: width, height: height}}>
                <div>◈ AI 예측현황: 작업자 활동</div>
                <div className={styles.linechart}>
                    <div style={{width: '70%'}}>
                        <canvas id="line-chart"></canvas>
                    </div>
                    <table>
                    <thead>
                        <tr>
                            <td colSpan="2">활동 통계</td>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>이동</td>
                        <td>3,200</td>
                    </tr>
                    <tr>
                        <td>멈춤</td>
                        <td>1,200</td>
                    </tr>
                    <tr>
                        <td>넘어짐</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>추락</td>
                        <td>0</td>
                    </tr>
                    </tbody>
                    </table>
                    
                </div>
            </div>
        </>
    )
}