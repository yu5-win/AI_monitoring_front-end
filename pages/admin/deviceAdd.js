import React, { useState, useRef } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../../components/Top'
import styles from '../../styles/Common.module.css'
import style from '../../styles/Add.module.css'
import { Input, Button, Form, Label } from 'semantic-ui-react'

export default function AdminDeviceAdd(){
  // 입력 받을 item
  const [inputs, setInputs] = useState({
    serial: '',
    wearer: '',
  });
  const { serial, wearer } = inputs;

  // input 입력 value 저장
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({...inputs, [name]: value });
  };
  const inputRef = useRef([]);

  // select
  const [selected, setSelected] = useState('wearableDevice');  
  const handleSelect = (e) => {
    setSelected(e.target.value);
  }

  const handleSubmit = (e) => { 
    // 빈칸 focus
    for(let i = 0; i<inputRef.current.length; i++){
      if(eval(inputRef.current[i].props.name) === ''){
        inputRef.current[i].focus();
        break;
      } 
    } 
    // 칸이 모두 채워졌을 경우
    if(serial != '' && wearer!= ''){
      //클라이언트 POST API 요청
      axios.post('http://localhost:3001/api/device/add', {
        serial: serial,
        selected: selected,
        wearer: wearer,
      })
      .then(res => {
        console.log(res.data.devices);
      })
      .catch(err => {
        console.log(err);
      }); 
      location.href='./device'
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
        <Top title=" : 장비설정" />
        <div className={style.inputContainer}>
          <Form onSubmit={handleSubmit} size='huge'>
            시리얼넘버: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="serial"
                placeholder="시리얼넘버를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { serial === '' ? true : false }
                ref={el=>(inputRef.current[0] = el)}
              />
            </div>
            <div></div>
            
            종류: 
            <div className={style.inputInfo}>
              <select onChange={handleSelect}>
                <option value='wearableDevice'>웨어러블 장치</option>
                <option value='smartBand'>스마트밴드</option>
              </select>
            </div>
            <div></div>

            <div className={style.searchInfo}>
              착용자: 
              <div className={style.inputInfo} style={{width:'880px'}}>
                <Input
                  fluid
                  name="wearer"
                  placeholder="착용자를 확인해주세요."
                  onChange={onChange}
                  onKeyPress={onKeyPress}
                  error = { wearer === '' ? true : false }
                  ref={el=>(inputRef.current[1] = el)}
                />
              </div>
              <div>
                <Button 
                  size='huge' 
                  color='grey'
                >검색</Button>
              </div>
            </div>
            <div></div>

            <div className={style.btnContainer}>
              <Link href={'./device'}>
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