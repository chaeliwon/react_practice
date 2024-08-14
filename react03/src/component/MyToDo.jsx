import React from 'react'
import { useState, useRef, useEffect } from "react";

const MyToDo = () => {

    const textref = useRef(); // input 요소의 참조를 저장
    const [toDo, setToDo] = useState([]); // toDo 리스트를 관리하는 상태

    const inputText = () => {
        // 기존 배열에 input 태그에서 입력한 내용을 추가
        // concat을 사용하여 기존 배열에 데이터를 추가한 새로운 배열 생성
        setToDo(toDo.concat(textref.current.value));
        textref.current.value = ""; // 입력 필드를 비웁니다.

    };

    // state 변수에 의해서 실행되어지는 함수
    // state 변수에 지정되는 함수를 만들겠다

    //useEffect : 함수 컴포넌트에서 LifeCycle을 기준으로 실행시키는 함수
    // useEffect = componentDidMount + componentDidUpdate
    useEffect(() => {
        // 최대 목표개수에 도달했습니다!
        console.log("useEffect");
        
        if (toDo.length == 5) {
            alert("최대 목표개수에 도달했습니다")
        }
    })

    const out = (index) => {
        // 전달된 index를 기반으로 해당 항목을 제거한 새로운 배열 생성
        setToDo(toDo.filter((data, i) => i !== index));
        // 자리는 똑같아야한다! data를 안쓰더라도 빈자리는 만들어 둘것!
        // i와 index똑같은 글자로 쓰면안됌!!! 그러면 다 같이 지워짐 i는 하단에서 전달한 index와 다른 out함수에서 쓰는

    };

    return (
        <div>
            <h1>2024 올해는 꼭 해봅시다!</h1>
            <input ref={textref} type="text" />
            <button onClick={inputText}>계획추가</button>

            <hr />
            <h1>ToDoList</h1>
            <ul>
                {toDo.map((data, index) => (
                    <li key={index}>
                        {data}
                        <button onClick={() => out(index)}>삭제</button> {/* out 함수에 index 전달 , 전달할려는 요소를 함수() 괄호 안에 확실히 적어서 전달할것 */}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MyToDo;
