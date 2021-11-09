import styles from '../styles/Common.module.css'
import Chart from 'chart.js'
import { useEffect } from 'react'

export default function AiAir({height}) {

    useEffect(()=>{
        new Chart(document.getElementById("line-chart3"), {
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
            <div>◈ AI서버 예측 현황 : 공기질 이상탐지</div>
            <div className={styles.linechart}>
                <div>
                <canvas id="line-chart3"></canvas>
                </div>
                <table>
                <thead>
                    <tr>
                        <td colSpan="2">공기질 통계</td>
                    </tr>
                </thead>
                <tbody>
                <tr>
                    <td>CO2</td>
                    <td>2건</td>
                </tr>
                <tr>
                    <td>VOCs</td>
                    <td>4건</td>
                </tr>
                <tr>
                    <td>PM10</td>
                    <td>5건</td>
                </tr>
                </tbody>
                </table>
            </div>
        </div>        
        </>
    )
}

