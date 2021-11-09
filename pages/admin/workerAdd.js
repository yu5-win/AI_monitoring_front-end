import React, { useState, useRef } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Top from '../../components/Top'
import styles from '../../styles/Common.module.css'
import style from '../../styles/Add.module.css'
import { Input, Button, Form, Radio } from 'semantic-ui-react'

export default function AdminWorkerAdd(){
  // 입력 받을 item
  const [inputs, setInputs] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    smart: '',
    wearable: ''
  });
  const { name, age, weight, height, smart, wearable } = inputs;

  // input 입력 value 저장
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({...inputs, [name]: value });
  };
  const inputRef = useRef([]);

  // radio button
  const [sex, setSex] = useState('');  
  const changeRadio = (e) => {
    setSex(e.target.value);
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
    if(name!='' && age!='' && sex!='' && weight!='' && height!='' && smart!='' && wearable!=''){
      //클라이언트 POST API 요청
      axios.post('http://localhost:3001/api/worker/add', {
        name: name, 
        age: age, 
        sex: sex, 
        weight: weight, 
        height: height, 
        smart: smart, 
        wearable: wearable
      })
      .then(res => {
        console.log(res.data.workers);
      })
      .catch(err => {
        console.log(err);
      }); 
      //location.href='./worker'
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
            이름: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="name"
                placeholder="이름을 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { name === '' ? true : false }
                ref={el=>(inputRef.current[0] = el)}
              />
            </div>
            <div></div>
            
            나이: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="age"
                placeholder="나이를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { age === '' ? true : false }
                ref={el=>(inputRef.current[1] = el)}
              />
            </div>
            <div></div>

            <div className={style.radioInfo}>
            성별: 
              <div className={style.sexInfo}>
                <input 
                  type="radio" 
                  name="sex" 
                  id="male" 
                  className={style.sexInput}
                  value="male" 
                  onChange={changeRadio}
                /><label for="male">남자</label>
                <input 
                  type="radio" 
                  name="sex" 
                  id="female" 
                  className={style.sexInput}
                  value="female" 
                  onChange={changeRadio}
                /><label for="female">여자</label>
              </div>
            </div>
            <div></div>

            체중: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="weight"
                placeholder="체중를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { weight === '' ? true : false }
                ref={el=>(inputRef.current[2] = el)}
              />
            </div>
            <div></div>

            신장: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="height"
                placeholder="신장를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { height === '' ? true : false }
                ref={el=>(inputRef.current[3] = el)}
              />
            </div>
            <div></div>

            <div style={{marginRight:"10px"}}>
              <div className={style.searchInfo} style={{marginLeft: '20px'}}>
                스마트밴드: 
                <div className={style.inputInfo} style={{width:'880px'}}>
                  <Input
                    fluid
                    name="smart"
                    placeholder="스마트밴드를 입력해주세요."
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    error = { smart === '' ? true : false }
                    ref={el=>(inputRef.current[4] = el)}
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

              <div className={style.searchInfo} style={{marginLeft: '0px'}}>
                웨어러블 장치: 
                <div className={style.inputInfo} style={{width:'880px'}}>
                  <Input
                    fluid
                    name="wearable"
                    placeholder="웨어러블 장치를 입력해주세요."
                    onChange={onChange}
                    onKeyPress={onKeyPress}
                    error = { wearable === '' ? true : false }
                    ref={el=>(inputRef.current[5] = el)}
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
            </div>

            <div className={style.btnContainer}>
              <Link href={'./worker'}>
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