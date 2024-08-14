import React from 'react'
import { useState } from 'react';

const MyState02 = () => {
    // 1.버튼 클릭시 어떤 버튼을 클리했는지 숫자를 출력해주세요!
    // 2.버튼 클릭시 1~3랜덤 수 생성 -> 랜덤 숫자 부분 출력

    const [num,setNum]=useState(0);
    const [random, setRandom]=useState(0);

    const one = ()=>{
        setNum(1)
        // 1~3 사이의 랜덤 수 생성
        setRandom(parseInt(Math.random()*3)+1)
    }
    const two = ()=>{
        setNum(2)
        setRandom(parseInt(Math.random()*3)+1)
    }
    const three = ()=>{
        setNum(3)
        setRandom(parseInt(Math.random()*3)+1)
    }

    const chNum=(e)=>{
        // (e)이벤트 객체 : 이벤트정보를 가지고있다.
        // (어떤 이벤트가 발생했는지, 누가 발생 시켰는지) 
        // e.target :이벤트를 발생시킨 태그
        setNum(e.target.innerText)
        setRandom(parseInt(Math.random()*3)+1)
    };

    return (
        <div>
            <div>
                <button onClick={chNum}>1</button>
                <button onClick={chNum}>2</button>
                <button onClick={chNum}>3</button>
            </div>

            <div>
                내가 입력한 숫자 : {num}
                <br />
                랜덤한 숫자 : {random}
                <br />
                {num == random ? <h1>정답!</h1> : <h1>땡!</h1>}
            </div>
        </div>
    )
}

export default MyState02