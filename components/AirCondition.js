import styles from '../styles/Common.module.css'
import Chart from 'chart.js'
import { useEffect } from 'react'

export default function AirCondition({id, title, width, height}) {
    
    useEffect(()=>{
        new Chart(document.getElementById("doughnut-chart1-" + id),{
            type: 'doughnut',
            data: {
              datasets: [{
                data: [30,70],
                backgroundColor: [
                  'rgb(0, 176, 240)',
                  'rgb(200, 200, 200)'
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
              cutoutPercentage: 75,
              tooltips: {enabled: false},
              elements: {
                arc: {
                    borderWidth: 0
                }
              }
            }
          });
        new Chart(document.getElementById("doughnut-chart2-" + id),{
            type: 'doughnut',
            data: {
              datasets: [{
                data: [60,40],
                backgroundColor: [
                  'rgb(251, 199, 0)',
                  'rgb(200, 200, 200)'
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
              cutoutPercentage: 75,
              tooltips: {enabled: false},
              elements: {
                arc: {
                    borderWidth: 0
                }
              }
            }
          });
        new Chart(document.getElementById("doughnut-chart3-" + id),{
            type: 'doughnut',
            data: {
              datasets: [{
                data: [50,50],
                backgroundColor: [
                  'rgb(0, 255, 64)',
                  'rgb(200, 200, 200)'
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
              cutoutPercentage: 75,
              tooltips: {enabled: false},
              elements: {
                arc: {
                    borderWidth: 0
                }
              }
            }
          });   
    });

    return (
        <>
            <div className={styles.a} style={{width: width, height: height}}>
                <div>◈ {title}</div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <div className={styles.air}>0.2ppm</div>
                        <canvas id={'doughnut-chart1-'+id} width="130" height="100"></canvas>
                        <div style={{textAlign: 'center'}}>CO2</div>
                    </div>
                    <div>
                        <div className={styles.air}>0.2ppm</div>
                        <canvas id={'doughnut-chart2-'+id} width="130" height="100"></canvas>
                        <div style={{textAlign: 'center'}}>VOCs</div>
                    </div>
                    <div>
                        <div className={styles.air}>0.1ppm</div>
                        <canvas id={'doughnut-chart3-'+id} width="130" height="100"></canvas>
                        <div style={{textAlign: 'center'}}>PM10</div>
                    </div>
                </div>
            </div>
        </>
    )
}