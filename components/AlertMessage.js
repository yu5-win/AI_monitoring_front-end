import Link from 'next/link'
import styles from '../styles/Common.module.css'

export default function AlertMessage() {
    return (
        <>
            <div className={styles.a} style={{width: '100%'}}>
                <div>◈ 시스템 메세지</div>
                <table style={{width: '99%', height: '160px'}}>
                <thead style={{backgroundColor: 'rgb(40,40,40)'}}>
                    <tr>
                    <th>작업자</th>
                    <th>위치</th>
                    <th>시간</th>
                    <th>내용</th>
                    <th>상태</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        <Link href='/worker?id=1'>
                            <a>김수영</a>
                        </Link>
                    </td>
                    <td>1층</td>
                    <td>2021-06-19 14:28:20</td>
                    <td>추락</td>
                    <td style={{color: 'red'}}>위험</td>
                    </tr>
                    <tr>
                    <td>
                        <Link href='/worker?id=2'>
                            <a>홍길동</a>
                        </Link>
                    </td>
                    <td>1층</td>
                    <td>2021-06-19 14:28:20</td>
                    <td>생체신호 경고</td>
                    <td style={{color: 'rgb(255,192,0)'}}>경고</td>
                    </tr>
                    <tr>
                    <td>
                        <Link href='/worker?id=3'>
                            <a>황의조</a>
                        </Link>
                    </td>
                    <td>2층</td>
                    <td>2021-06-19 14:28:20</td>
                    <td>넘어짐</td>
                    <td style={{color: 'rgb(255,192,0)'}}>경고</td>
                    </tr>
                    <tr>
                    <td>
                        <Link href='/worker?id=4'>
                            <a>정의훈</a>
                        </Link>
                    </td>
                    <td>4층</td>
                    <td>2021-06-19 14:28:20</td>
                    <td>생체신호 경고</td>
                    <td style={{color: 'rgb(255,192,0)'}}>경고</td>
                    </tr>
                    
                </tbody>
                </table>
            </div>
        </>
    )
}