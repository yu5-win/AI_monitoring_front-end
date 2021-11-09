import styles from '../styles/Common.module.css'
import Chart from 'chart.js'
import { useEffect } from 'react'

export default function AiHealth({height}) {
    useEffect(()=> {
        new Chart(document.getElementById("line-chart2"), {
            type: 'line',
            data: {
              labels: [1500,1600,1700,1750,1800,1850,1900,1950,1999,2050,2100],
              datasets: [{ 
                  data: [86,114,106,106,107,111,133,221,783,2478],
                  label: "정상",
                  borderColor: "#3e95cd",
                  fill: false
                }, { 
                  data: [282,350,411,502,635,809,947,1402,3700,2000],
                  label: "경고",
                  borderColor: "#8e5ea2",
                  fill: false
                }, { 
                  data: [168,170,178,190,203,276,408,547,675,734],
                  label: "위험",
                  borderColor: "#3cba9f",
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
        <div className={styles.a} style={{width: '33.3%', height: height}}>
            <div>◈ AI서버 예측 현황 : 작업자 생체신호 이상탐지</div>
            <div className={styles.linechart}>
                <div><canvas id="line-chart2"></canvas></div>
                <table>
                <thead>
                    <tr>
                        <td colSpan="2">생체신호 통계</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>정상</td>
                    <td>120</td>
                </tr>
                <tr>
                    <td>경고</td>
                    <td>23</td>
                </tr>
                <tr>
                    <td>위험</td>
                    <td>2</td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>       
        </>
    )
}

