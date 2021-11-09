import Link from 'next/link'
import { useEffect } from 'react'
import styles from '../styles/Common.module.css'

export default function WorkerHealth({data, width, height}) {

    var color = 'rgb(0, 255, 64)';
    if (data.health < 60)
        color = 'rgb(255, 99, 132)';
    else if(data.health >= 60 && data.health < 80)
        color = 'rgb(255, 192, 0)';

    useEffect(()=>{
        new Chart(document.getElementById("worker-chart-" + data.id),{
            type: 'doughnut',
            data: {
              datasets: [{
                data: [data.health,100-data.health],
                backgroundColor: [
                  color,
                  'rgb(200, 200, 200)'
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
              cutoutPercentage: 70,
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
            <div className={styles.a} style={{width: width, height: height}} >
                <div>
                    <Link href={'/worker?id='+data.id}>
                        <a>♥ {data.username} : {data.position}</a>
                    </Link> 
                </div>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <div>
                        <div className={styles.airH}>{data.health}%</div>
                        <canvas id={'worker-chart-'+data.id} width="150" height="130"></canvas>
                        <div className={styles.healthstate}>건강상태</div>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th colSpan="2">활동 예측</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr style={{backgroundColor: 'rgb(0,112,192)'}}>
                            <td>14:30:21</td>
                            <td>걷기</td>
                        </tr>
                        <tr>
                            <td>14:29:20</td>
                            <td>달리기</td>
                        </tr>
                        <tr>
                            <td>14:28:20</td>
                            <td style={{color: 'red'}}>넘어짐</td>
                        </tr>
                        <tr>
                            <td>14:26:20</td>
                            <td>걷기</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}