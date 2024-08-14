import React from 'react'
import { useContext } from 'react'
import { ColorContext } from '../App'



// 헷갈린다면 2024 8월 14일 강의
const MyColor = () => {

    //이부분은 리액트 문법에 대한 부분입니다
    const testFun =()=>{
        // 1. 실행로직이 한줄이라면 {}생략 가능합니다
        // 2. {} 생략한 경우 함수 실행로직으로 data가 있다면 해당 data를 반환(return) 하겠습니다.
        // ex. 밑의경우에서 중괄호가 들어간다면 반환값이 사라진다. 리액트는 결국 html로 보내주기때문에 return 값이 있어야한다
    }





    const color = useContext(ColorContext)

    const colorArray = ['red', 'orange', 'yellow', 'green', 'blue']


    const divClick = (e) => {
        color.setState(e.target.style.backgroundColor)
    }

    // 화살표함수를 사용할때 한줄이면(실행로직이 한줄이라면) 중괄호 생략 가능하다!
    return (
        <div>
            {colorArray.map((data, index) =>
                <div onClick={divClick}
                    style={{
                        backgroundColor: data,
                        width: "100px",
                        height: "100px",
                        display: "inline-block"
                    }}>
                </div>)}
        </div>
    )
}

export default MyColor