import styles from '../styles/Common.module.css'
import Head from 'next/head'
import Image from 'next/image'
import Top from '../components/Top'
import AiHar from '../components/AiHar'
import WorkerHealth from '../components/WorkerHealth'
import BioStatus from '../components/BioStatus'
import AirCondition from '../components/AirCondition'
import AiHealth from '../components/AiHealth'
import AiAir from '../components/AiAir'
import AlertMessage from '../components/AlertMessage'

export default function Worker() {
    return (
        <div className={styles.container}>
            <Head>
            <title>산업안전 AI관제</title>
            <meta name="description" content="Industrial Safety AI Monitoring" />
            <link rel="icon" href="/favicon.ico" /> 
            </Head>
    
            <div className={styles.main}>
                <Top title=' : 작업자모니터링' />

                <div className={styles.row}>
                    <div className={styles.a} style={{width: '33.3%', height: '280px'}}>
                        <div style={{height: '20px'}}>◈ 작업자 정보</div>
                        <div className={styles.worker_table}>
                            <div className={styles.worker_img}>
                                <Image src="/images/user.png" width={100} height={113} alt="photo" /> 
                            </div>
                            
                            <div className={styles.worker_info}>
                                <ul>
                                <li style={{marginBottom: '4px'}}>성명: 김수영</li>
                                <li style={{marginBottom: '4px'}}>나이: 20</li>
                                <li style={{marginBottom: '4px'}}>성별: 남자</li>
                                <li style={{marginBottom: '4px'}}>직급: 7급 사원</li>
                                <li style={{marginBottom: '4px'}}>부서: 제조1팀</li>
                                </ul>
                            </div>
                            
                        </div>
                        
                        <table className={styles.userinfo}>
                            <tbody>
                            <tr>
                                <td>키</td><td>180cm</td><td>체중</td><td>72kg</td>
                            </tr>
                            <tr>
                                <td>혈압</td><td>90~120</td><td>체온</td><td>36.2°c</td>
                            </tr>
                            <tr>
                                <td>기저질환</td><td colSpan="3">특이사항 없음</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>  
                  
                    <WorkerHealth data={{id:'1', username:'김수영', position:'1층', health:'89'}} width='33.3%' height='280px' />
                    <AirCondition id='1' title='1층 작업장 공기질' width='33.3%' height='280px' />
                </div>
                <div className={styles.row}>
                    <BioStatus />
                </div>
                <div className={styles.row}>
                    <AiHar width='33.3%' height='215px' />
                    <AiHealth height='215px' />
                    <AiAir height='215px' />
                </div>
                <div className={styles.row}>
                    <AlertMessage />
                </div>
            </div>             
        </div>
    )
}