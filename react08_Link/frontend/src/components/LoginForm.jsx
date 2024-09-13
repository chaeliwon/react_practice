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
      alert("로그인 성공!");

      // 로그인 성공시 , session Storge에 보관 스토리지에 보관할때에는 문자열로 변환해서 저장해야한다
      // -> 객체를 문자열로 변환 JSON.stringfy()
      console.log(JSON.stringify(res.data));
      
      sessionStorage.setItem("userInfo", JSON.stringify(res.data))
      
      navigate("/");
  } else {
      alert("로그인 실패..");
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