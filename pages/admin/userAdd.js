import React, { useState, useRef } from 'react'
import axios from 'axios'
import Head from 'next/head'
import Link from 'next/link'
import Top from '/components/Top'
import styles from '/Common.module.css'
import style from '/Add.module.css'
import { Input, Button, Form, Label } from 'semantic-ui-react'

export default function AdminUserAdd(){
  // 입력 받을 item
  const [inputs, setInputs] = useState({
    id: '',
    pw: '',
    name: '',
    email: '',
    contact: '',
  });
  const { id, pw, name, email, contact } = inputs;
  const [pwCk, setPwCk] = useState('');

  // input 입력 value 저장
  const onChange = e => {
    const { name, value } = e.target;
    setInputs({...inputs, [name]: value });
  };
  const pwCkChange = e => {
    setPwCk(e.target.value);
  }

  const inputRef = useRef([]);

  const handleSubmit = (e) => { 
    for(let i = 0; i<inputRef.current.length; i++){
      if(eval(inputRef.current[i].props.name) === ''){
        inputRef.current[i].focus();
        break;
      } 
    } 

    // 암호가 다를 경우 초기화
    if(pw!=''){
      if(pwCk != pw){
        setPwCk('');
        inputRef.current[2].focus();
      } 
    }

    // 칸이 모두 채워졌을 경우
    if(id != '' && pwCk===pw && name != '' && email != '' && contact != ''){
      //클라이언트 POST API 요청
      axios.post('http://localhost:3001/api/users/add', {
        id: id,
        pw: pw,
        name: name,
        email: email,
        contact: contact,
      })
      .then(res => {
        console.log(res.data.users);
      })
      .catch(err => {
        console.log(err);
      }); 
      location.href='./user'
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
        <meta name="description" content="Industrial Safety AI Monitoring" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

      <div className={styles.main}>
        <Top title=" : 관리자" />
        <div className={style.inputContainer}>
          <Form onSubmit={handleSubmit} size='huge'>
            아이디: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="id"
                placeholder="아이디를 입력해주세요."
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { id===''?true:false }
                ref={el=>(inputRef.current[0] = el)}
              />
            </div>
            <div></div>

            암호: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="pw"
                placeholder="암호"
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { pw===''?true:false }
                ref={el=>(inputRef.current[1] = el)}
                type="password"
              />
            </div>
            <div></div>

            암호확인: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="pwCk"
                type="password"
                placeholder="암호"
                onChange={pwCkChange}
                onKeyPress={onKeyPress}
                error = { pwCk===''?true:false }
                ref={el=>(inputRef.current[2] = el)}
                value={pwCk}
              />
            </div>
            <div></div>

            이름: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="name"
                placeholder="이름"
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { name===''?true:false }
                ref={el=>(inputRef.current[3] = el)}
              />
            </div>
            <div></div>

            이메일: 
            <div className={style.inputInfo}>
              <Input
                fluid
                name="email"
                placeholder="이메일"
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { email===''?true:false }
                ref={el=>(inputRef.current[4] = el)}
              />
            </div>
            <div></div>

            연락처:
            <div className={style.inputInfo}>
              <Input
                fluid
                name="contact"
                placeholder="연락처"
                onChange={onChange}
                onKeyPress={onKeyPress}
                error = { contact===''?true:false }
                ref={el=>(inputRef.current[5] = el)}
              />
            </div>
            <div></div>

            <div className={style.btnContainer}>
              <Link href={'./user'}>
                <Button 
                  size='huge' 
                  color='grey'
                >취소</Button>
              </Link>
              
              <Button
                type="submit"
                size='huge' 
                color='green'
              >계정 추가</Button>
            </div>
          </Form>
        </div>
      </div>
    </div>      
  )
}
