import Head from 'next/head'
import styles from '../styles/Common.module.css'
import Top from '../components/Top'
import AlertMessage from '../components/AlertMessage'
import AiHar from '../components/AiHar'
import AiHealth from '../components/AiHealth'
import AiAir from '../components/AiAir'
import DataStat from '../components/DataStat'
import { useEffect } from 'react'

export default function Ai() {
    useEffect(()=>{

    });

    return (
        <div className={styles.container}>
            <Head>
            <title>산업안전 AI관제</title>
            <meta name="description" content="Industrial Safety AI Monitoring" />
            <link rel="icon" href="/favicon.ico" /> 
            </Head>
    
            <div className={styles.main}>
                <Top title=' : AI모니터링' />
                <div className={styles.row}>
                  <div className={styles.a} style={{width: '25%'}}>
                      <div>◈ AI서버 상태</div>
                      <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '30px', paddingBottom: '30px'}}>정상</div>
                      <div>학습 데이터 : 33,000건</div>
                      <div>마지막 학습 이후 3일 경과</div>
                      </div>
                  </div>

                  <div className={styles.a} style={{width: '25%'}}>
                      <div>◈ AI학습 오차</div>
                      <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '30px', paddingBottom: '30px'}}>9.2%</div>
                      <div>평균 에러율 산정결과</div>
                      </div>
                  </div>

                  <div className={styles.a} style={{width: '25%'}}>
                      <div>◈ AI서버 정확도</div>
                      <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '30px', paddingBottom: '30px'}}>91.2%</div>
                      <div>AI예측 정확도 산정결과</div>
                      </div>
                  </div>

                  <div className={styles.a} style={{width: '25%'}}>
                      <div>◈ AI서버 예측결과</div>
                      <div style={{textAlign: 'center'}}>
                      <div style={{fontSize: '30px', paddingBottom: '30px'}}>342건</div>
                      <div>장애를 예측했습니다.</div>
                      </div>
                  </div>
                </div>

                <div className={styles.row}>
                    <DataStat />
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