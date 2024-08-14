import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App'
import { useRef } from 'react'


const SubItem03 = () => {

  const inputRef = useRef();

  const data = useContext(AppContext);

  const chinput = () => {
    data(inputRef.current.value)
  };

  return (
    <div>
      <input type="text" ref={inputRef} placeholder='하고싶은 말' />
      <button onClick={chinput}>출력</button>
    </div>
  )
}

export default SubItem03