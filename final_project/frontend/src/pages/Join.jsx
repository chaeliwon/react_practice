import React, { useRef } from 'react'
import api from '../api';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Join = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nicknameRef = useRef(null);
  const navigate = useNavigate()

  const sendJoin = async (e) => {
    e.preventDefault()
    let joinData = {
      id : idRef.current.value,
      pw : pwRef.current.value,
      nick : nicknameRef.current.value
    }
    let res = await api.post('/user/join', joinData)

    console.log(res.data);
    if(res.data.result === "success"){
      navigate("/")
    }else{
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "회원가입 오류 발생!",
        footer: '<a href="#">Why do I have this issue?</a>'
      });
    }
  }

  return (
    <div className='content'>
      <form onSubmit={sendJoin}>
        <p>
          <label>ID : </label>
          <input type="text" ref={idRef} />
        </p>
        <p>
          <label>PW : </label>
          <input type="password" ref={pwRef}/>
        </p>
        <p>
          <label>Nick : </label>
          <input type="text" ref={nicknameRef} />
        </p>
        <p>
          <input type="submit" value='Join' />
        </p>

      </form>
    </div>
  )
}

export default Join