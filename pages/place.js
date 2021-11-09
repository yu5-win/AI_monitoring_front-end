import styles from '../styles/Common.module.css'
import Head from 'next/head'
import Top from '../components/Top'
import StatusCount from '../components/StatusCount'
import AirCondition from '../components/AirCondition'
import AiHar from '../components/AiHar'
import AiHealth from '../components/AiHealth'
import AiAir from '../components/AiAir'
import WorkerHealth from '../components/WorkerHealth'
import AlertMessage from '../components/AlertMessage'

export default function Place() {
    return (
        <div className={styles.container}>
            <Head>
            <title>산업안전 AI관제</title>
            <meta name="description" content="Industrial Safety AI Monitoring" />
            <link rel="icon" href="/favicon.ico" /> 
            </Head>
    
            <div className={styles.main}>
                <Top title=' : 작업장 모니터링' />
                <div className={styles.row}>
                    <StatusCount width='33.3%'/>
                    <AirCondition id='1' title='1층 작업장 공기질' width='33.3%' />
                    <div className={styles.a} style={{width: '33.3%'}}>
                        <div>◈ 작업자 현황</div>
                        <div style={{textAlign: 'center'}}>
                            <div style={{paddingBottom: '30px'}}>
                                <span style={{fontSize: '50px'}}>34명 /</span><span style={{fontSize: '30px'}}> 총 40명</span>
                            </div>
                            <div>작업 중 입니다.</div>
                        </div>
                    </div>
                </div>

                <div className={styles.row}>
                    <AiHar width='33.3%' height='215px' />
                    <AiHealth height='215px' />
                    <AiAir height='215px' />
                </div>

                <div className={styles.row}>
                    <WorkerHealth data={{id:'1', username:'김수영', position:'1층', health:'89'}} width='25%' />
                    <WorkerHealth data={{id:'2', username:'홍길동', position:'1층', health:'59'}} width='25%' />
                    <WorkerHealth data={{id:'3', username:'신정택', position:'1층', health:'67'}} width='25%' />
                    <WorkerHealth data={{id:'4', username:'정의훈', position:'1층', health:'82'}} width='25%' />

                </div>

                <div className={styles.row}>
                    <AlertMessage />
                </div>
            </div>             
        </div>
    )
}