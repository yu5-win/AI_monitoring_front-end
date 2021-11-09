import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Common.module.css'
import Top from '../components/Top'
import StatusCount from '../components/StatusCount'
import AiHar from '../components/AiHar'
import AirCondition from '../components/AirCondition'
import AlertMessage from '../components/AlertMessage'
import WorkerHealth from '../components/WorkerHealth'
import Script from 'next/script'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>산업안전 AI관제</title>
        <meta name="description" content="Industrial Safety AI Monitoring" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <div className={styles.main}>
        <Top title=' : AI통합관제 ' />
        <div>
          <div style={{float: 'left'}} className={styles.floorPlan}>
            <Image src='/images/backimg.png' alt='GS건설' width={672} height={235} />
            <canvas id="myCanvas" width="770" height="430"></canvas>
            <Script src='/js/floorPlan.js' /> 
          </div>
          <div className={styles.row}>
            <StatusCount width='50%' />
            <AiHar width='50%' height='215px' />
          </div>
          <div className={styles.row}>
            <AirCondition id='1' title='1층 작업장 공기질' width='50%' height='215px' />
            <AirCondition id='2' title='2층 작업장 공기질' width='50%' height='215px' />
          </div>
        </div>
       
        <div className={styles.row}>
          <WorkerHealth data={{id:'1', username:'김수영', position:'1층', health:'89'}} width='25%' height='215px' />
          <WorkerHealth data={{id:'2', username:'홍길동', position:'4층', health:'59'}} width='25%' height='215px' />
          <WorkerHealth data={{id:'3', username:'신정택', position:'2층', health:'67'}} width='25%' height='215px' />
          <WorkerHealth data={{id:'4', username:'정의훈', position:'3층', health:'82'}} width='25%' height='215px' />
        </div>
       
        <div className={styles.row}>
          <AlertMessage />
        </div>
      </div>
    </div>
  )
}
