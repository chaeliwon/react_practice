import React, { useRef } from 'react'
import api from '../api';

const Join = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nicknameRef = useRef(null);
  const sendJoin = async (e) => {
    e.preventDefault()
    let joinData = {
      id : idRef.current.value,
      pw : pwRef.current.value,
      nick : nicknameRef.current.value
    }
    let res = await api.post('/user/join', joinData)
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