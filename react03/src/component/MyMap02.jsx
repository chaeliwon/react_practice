import React from 'react'
import { useState } from 'react'

const MyMap02 = () => {

    const colorArray = ['red','orange','yellow','green','blue']
    const [myColor, setMyColor]=useState('black')

    // ...(스프레드) : 객체 or 배열이 가지고 있는 내용을 펼치겠습니다.
    const divClick =(e)=>{
        // 두번째 줄에 있는 div 태그 색상 변경
        setMyColor(e.target.style.backgroundColor)
    }
  return (
    <div>
        {colorArray.map((data,index)=>
        <div onClick={divClick} style={{backgroundColor:data, width:"100px", height:"100px", display:"inline-block"}}></div>)}
        <hr />
        <div style={{
            width:"100px", height:"100px", backgroundColor:myColor,  display:"inline-block"
        }}></div>

    </div>
  )
}

export default MyMap02