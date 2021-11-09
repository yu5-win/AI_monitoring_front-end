import React, { useState, useRef } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../../components/Top'
import styles from '../../styles/Common.module.css'
import style from '../../styles/Add.module.css'
import { Input, Button, Form, Label } from 'semantic-ui-react'

export default function AdminWorkplaceAdd(){
  // 입력 받을 item
  const [inputs, setInputs] = useState({
    workplace: '',
    atitude: '',
    longitude: '',
    radius: '',
    altitude: '',
    remark: '',
  });
  const { workplace, atitude, longitude, radius, altitude, remark } = inputs;

  // input 입력 value 저장
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({...inputs, [name]: value });
  };

  const inputRef = useRef([]);

  const handleSubmit = (e) => { 
    for(let i = 0; i<inputRef.current.length; i++){
      if(eval(inputRef.current[i].props.name) === ''){
        inputRef.current[i].focus();
        break;
      } 
    } 

    // 칸이 모두 채워졌을 경우
    if(workplace != '' && atitude != '' && longitude!= '' && radius != '' && altitude != '' && remark != ''){
      //클라이언트 POST API 요청
      axios.post('http://localhost:3001/api/workplace/add', {
        workplace: workplace,
        atitude: atitude,
        longitude: longitude,
        radius: radius,
        altitude: altitude,
        remark: remark,
      })
      .then(res => {
        console.log(res.data.users);
      })
      .catch(err => {
        console.log(err);
      }); 
      location.href='./workplace'
    }
  };

  // Enter 입력
  const onKeyPress = (e) =>{
    if(e.key === 'Enter'){
      handleSubmit();
      e.preventDefault();
    }
  }

  return(
    <div className={styles.container}>
      <Head>
        <title>산업안전 AI관제</title>
        <meta name="description" content="Industrial Safety AI Monitoring" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <div className={styles.main}>
        <Top title=" : 작업장 관리" />
        <div className={style.inputContainer}>
          <Form onSubmit={handleSubmit} size='huge'>
            작업장명: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="workplace"
                placeholder="작업장명을 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { workplace === '' ? true : false }
                ref={el=>(inputRef.current[0] = el)}
              />
            </div>
            <div></div>

            위도: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="atitude"
                placeholder="위도를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { atitude === '' ? true : false }
                ref={el=>(inputRef.current[1] = el)}
              />
            </div>
            <div></div>

            경도: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="longitude"
                placeholder="경도를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { longitude === '' ? true : false }
                ref={el=>(inputRef.current[2] = el)}
              />
            </div>
            <div></div>

            반경: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="radius"
                placeholder="반경을 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { radius === '' ? true : false }
                ref={el=>(inputRef.current[3] = el)}
              />
            </div>
            <div></div>

            고도: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="altitude"
                placeholder="고도를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { altitude === '' ? true : false }
                ref={el=>(inputRef.current[4] = el)}
              />
            </div>
            <div></div>

            비고:
            <div className={style.inputInfo}>
              <Input
                fluid
                name="remark"
                placeholder="비고를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { remark === '' ? true : false }
                ref={el=>(inputRef.current[5] = el)}
              />
            </div>
            <div></div>

            <div className={style.btnContainer}>
              <Link href={'./workplace'}>
                <Button 
                  size='huge' 
                  color='grey'
                >취소</Button>
              </Link>
              
              <Button
                type="submit"
                size='huge' 
                color='green'
              >작업장 추가</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>      
  )
}