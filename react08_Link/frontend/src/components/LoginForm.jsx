import React, { useRef } from 'react'
import api from '../api'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const idRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate =  useNavigate();


  const handlelogin = async (e) => {
    e.preventDefault();

    const loginData = {
      ID: idRef.current.value,
      PW: passwordRef.current.value
    };

    let res = await api.post("/login", { data: loginData });
    console.log(res.data);

    if (res.data.result === "success") {
      navigate("/")
  }
  }

  return (
    <div>
      <form onSubmit={handlelogin}>
        <input 
        type="text" 
        placeholder='아이디를 입력하세요'
        ref={idRef} /><br />
        <input 
        type="text" 
        placeholder='비밀번호를 입력하세요'
        ref={passwordRef} /><br />
        <input type="submit" value="로그인" /><br />
      </form>
    </div>
  )
}

export default LoginForm