import React, { useState, useRef, useEffect } from 'react';

const MyFinal = () => {
    // 1. start 버튼을 클릭했을때 컴퓨터 주사위, 사용자 주사위가 랜덤하게 다른 주사위로 바꿔주세요
    // 2. 주사위 눈의 크기를 비교해서 comScore 또는 userScore 값을 1 증가시켜주세요
    // 3. comScore 또는 userScore 값이 먼저 10에 도달하게 되는 순간 결과를 출력해주세요 (com Win or user Win) 

    const [comScore, setComScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [result, setResult] = useState('');
    const [num, setNum] = useState(0);


    const comDiceRef = useRef(0);
    const userDiceRef = useRef(0);

    //useRef변수는 재랜더링에 영향을 받지 않는다!


    const imgArray = ["./img/dice1.png", "./img/dice2.png", "./img/dice3.png", "./img/dice4.png", "./img/dice5.png", "./img/dice6.png"];

    const getRandom = () => {
        return Math.floor(Math.random() * 6);  // 수정된 부분
    };

    const start = () => {
        const comDiceRoll = getRandom();
        const userDiceRoll = getRandom();

        comDiceRef.current.src = imgArray[comDiceRoll];
        userDiceRef.current.src = imgArray[userDiceRoll];

        if (comDiceRoll > userDiceRoll) {
            setComScore(comScore + 1);
        } else if (comDiceRoll < userDiceRoll) {
            setUserScore(userScore + 1);
        }
        setNum(num + 1)
    };


    useEffect(() => {
        if (comScore != 0 || userScore != 0) {
            console.log("useEffect");
            if (comScore === 10) {
                setResult("Com Win")
            } if (userScore === 10) {
                setResult("User Win")
            }
        }
    }, [comScore, userScore])
    //[] -> dependency Array (의존배열)

    const reset = () => {
        window.location.reload();
    };

    return (
        <div>
            <h1>DICE GAME</h1>
            <p>클릭수 : {num}</p>
            <button onClick={start}>Start</button>

            <div className="dice">
                <img src={imgArray[0]} ref={comDiceRef} alt="Computer Dice" />
                <h1>Com Score : {comScore}</h1>
            </div>
            <div className="dice">
                <img src={imgArray[0]} ref={userDiceRef} alt="User Dice" />
                <h1>User Score : {userScore}</h1>
            </div>

            <h1>결과 :  {result}</h1>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default MyFinal;
