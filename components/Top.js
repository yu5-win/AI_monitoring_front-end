import common from '../styles/Common.module.css'
import { Icon } from 'semantic-ui-react'
import Script from 'next/script'
import Link from 'next/link'
import { useEffect, useState } from 'react';

export default function Top({title}) {
    const [sideWidth, setSideWidth] = useState('0px');

    return (
        <div>
             <div style={{ marginBottom: '0px'}}>
                <div className={common.top} style={{marginRight: '30px', cursor: 'pointer'}} onClick={()=>{
                    setSideWidth('180px')
                }}>
                    <Icon name="bars" />
                </div>
                <div className={common.top}>GS건설 </div>
                <div className={common.top}>{title}</div>
                <div className={common.top} id="clock" style={{float: 'right'}}></div>
            </div>
            <Script src='/js/timer.js' /> 
            <div id='mySidenav' className={common.sidenav} style={{width: sideWidth}} >
                <div className={common.closebtn} onClick={()=>{ 
                    setSideWidth('0px');
                }}>&times;</div>
                <div>
                    <div><Icon name='address card' size='big' /></div>
                    <div style={{paddingBottom: '30px'}}>
                        <Link href='/admin/user'>
                            <a>관리자 설정</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <div><Icon name='factory' size='big' /></div>
                    <div style={{paddingBottom: '30px'}}>
                        <Link href='/admin/workplace'>
                            <a>작업장 관리</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <div><Icon name='microchip' size='big' /></div>
                    <div style={{paddingBottom: '30px'}}>
                        <Link href='/admin/device'>
                            <a>장치 관리</a>
                        </Link>
                    </div>
                </div>
                <div>
                    <div><Icon name='users' size='big' /></div>
                    <div style={{paddingBottom: '30px'}}>
                        <Link href='/admin/worker'>
                            <a>작업자 관리</a>
                        </Link>
                    </div>
                </div>
                <div style={{paddingBottom: '5px', fontSize:'16px'}}>모니터링</div>
                <div className={common.menupage}>
                    <Link href='/'>
                        <a style={{fontSize:'14px'}} onClick={()=>{
                            setSideWidth('0px');
                        }}>통합모니터링</a>
                    </Link>
                </div>
                <div className={common.menupage}>
                    <Link href='/ai'>
                        <a style={{fontSize:'14px'}} onClick={()=>{
                            setSideWidth('0px');
                        }}>인공지능모니터링</a>
                    </Link>
                </div>
                <div className={common.menupage}>
                    <Link href='/place?floor=1'>
                        <a style={{fontSize:'14px'}} onClick={()=>{
                            setSideWidth('0px');
                        }}>1층 작업장</a>
                    </Link>
                </div>
                <div className={common.menupage}>
                    <Link href='/place?floor=2'>
                        <a style={{fontSize:'14px'}} onClick={()=>{

                        }}>2층 작업장</a>
                    </Link>
                </div>
                <div className={common.menupage}>
                    <Link href='/place?floor=3'>
                        <a style={{fontSize:'14px'}} onClick={()=>{
                            setSideWidth('0px');
                        }}>3층 작업장</a>
                    </Link>
                </div>
                <div style={{position:'absolute', left:'35px', bottom:'80px', fontSize:'16px'}}>
                    <div><Icon name='power off' size='big' />로그아웃</div>
                </div>
            </div>   
                   
        </div>
    )
}

