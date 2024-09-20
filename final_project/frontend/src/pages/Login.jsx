import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import api from '../api';
import Swal from 'sweetalert2'

const Login = ({setNick}) => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const navigate = useNavigate();
  
  const sendLogin = async (e) => {
    e.preventDefault()

    let loginData = {
      id: idRef.current.value,
      pw: pwRef.current.value
    }

    let res = await api.post('/user/login', loginData)

    if(res.data.result ==="success"){
      sessionStorage.setItem('nick', res.data.nick)
      setNick(res.data.nick)
      navigate("/");
    }else{
      Swal.fire({
        title: 'Error!',
        text: '로그인 실패!',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
  }


  return (


    <div className='content'>
      <form onSubmit={sendLogin}>
        <p>
          <label>ID : </label>
          <input type="text" ref={idRef} />
        </p>
        <p>
          <label>PW : </label>
          <input type="password" ref={pwRef} />
        </p>
        <p>
          <input type="submit" value='Login' />
        </p>
      </form>
    </div>
  )
}

export default Login