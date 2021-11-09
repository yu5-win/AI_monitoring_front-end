import { Icon } from 'semantic-ui-react'
import styles from '../styles/Common.module.css'

export default function StatusCount({width}) {
    
    return (   
        <>   
            <div className={styles.a} style={{width: width}}>
                <div>◈ 작업장 상태</div>
                <div className={styles.contents}>
                    <div className={styles.alert}><Icon name='circle' color='green' />
                        <div className={styles.alert} style={{marginLeft: '13px'}}>정상</div>
                    </div>
                    <div className={styles.alert}><Icon name='circle' color='yellow' />
                        <div className={styles.alert} style={{marginLeft: '13px'}}>경고</div>
                    </div>
                    <div className={styles.alert}><Icon name='circle' color='red' />
                        <div className={styles.alert} style={{marginLeft: '13px'}}>위험</div>
                    </div>
                </div>
                <div className={styles.item}>
                    <div>1,223</div>
                    <div>23</div>
                    <div>0</div>
                </div>
            </div>  
        </>     
    )
}