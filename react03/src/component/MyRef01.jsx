import React, { useState, useRef } from 'react'
//useRef :  컴포넌트에서 특정 태그를 선택할 수 있는 기능

const MyRef01 = () => {
    const inputRef = useRef();
    //태그를 지정 할 수 있는 inputref라는 변수 생성

    const [inputText, setinputText] = useState('');

    const chinput = () => {
        //e.target : 이벤트를 발생시킨 주체(태그)
        //inputRef.current : 현재 가르키는 태그 객체, 태그를 바로 사용할수 있게끔 객체로 가져오는 작업
        setinputText(inputRef.current.value)
        // 태그가 가진 속성값을 계속 사용할수 있다
    }
   
    return (
        // ref = {inputref} : 해당태그와 inputRef라는 변수를 대응하겠습니다.
        <div>
            
            <input ref={inputRef} type="text" />
            <button onClick={chinput}>출력</button>
            <h1>{inputText}</h1>
        </div>
    )
}

export default MyRef01