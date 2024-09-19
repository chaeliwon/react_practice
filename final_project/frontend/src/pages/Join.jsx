import React, { useRef } from 'react'

const Join = () => {
  const idRef = useRef(null);
  const pwRef = useRef(null);
  const nicknameRef = useRef(null);
  const handleSubmit = () => {

  }
  return (
    <div className='content'>
      <form onSubmit={handleSubmit}>
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