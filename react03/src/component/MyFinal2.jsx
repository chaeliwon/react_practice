import React from 'react'
import { useRef , useState } from 'react'

// 비교 로직에 사용될 변수
let com = 0;
let user = 0;

const MyFinal2 = () => {
    
    //1. start 버튼을 클릭했을때
    //   컴퓨터 주사위 , 사용자 주사위 가 랜덤 하게 
    //   다른 주사위로 바꿔주세요
    //2. 주사위 눈의 크기를 비교해서 
    // ComScore 또는 UserScore 값을 1 증가 시켜주세요!
    //3. ComScore 또는 UserScore 값이 먼저 10에 도달하게 되는순간
    // 결과 를 출력 해주세요 (Com WIN  or User WIN)

    const diceArray =['/dice1.png','/dice2.png','/dice3.png'
                     ,'/dice4.png','/dice5.png','/dice6.png']

    
    // useRef 변수는 재렌더링에 영향을 받지 않는다!
    const comImgRef = useRef();
    const userImgRef = useRef();
    
    const [comScore, setComScore] = useState(0);
    const [userScore, setUserScore] = useState(0);
    const [result ,setResult] = useState('');
    
    // let com = 0;
    // let user = 0;
    

    function chDice(){
        // let com = comScore;
        // let user = userScore;
        
        let comRanNum = parseInt(Math.random()*6)
        let userRanNum = parseInt(Math.random()*6)

        // comImgRef.current.src = './img/dice'+comRanNum+'.png'
        // userImgRef.current.src= './img/dice'+userRanNum+'.png'

        comImgRef.current.src = './img'+diceArray[comRanNum]
        userImgRef.current.src= './img'+diceArray[userRanNum]

        //컴퓨터 주사위와 사용자 주사위 크기를 비교 해야함
        if(comRanNum > userRanNum){
            com++
            setComScore(comScore+1)
        }
        else if(userRanNum > comRanNum){
            user++
            setUserScore(userScore+1)
        }

        console.log('COM : '+com)
        console.log('USER : '+user)
        //먼저 10에 도달 했다면 com win 또느 user win
        if(com == 10){
            setResult('COM WIN')
        }
        else if(user ==10){
            setResult('USER WIN')
        }
    }



  return (
    <div>
      <h1>DICE GAME</h1>
      <button onClick={chDice}>Start</button>

      <div className="dice">
        <img src='./img/dice1.png' ref={comImgRef}></img>
        <h1>Com Score : {comScore}</h1>
      </div>
      <div className="dice">
        <img src='./img/dice1.png' ref={userImgRef}></img>
        <h1>User Score : {userScore}</h1>
      </div>

      <h1>결과 : {result}</h1>
    </div>
  )
}

export default MyFinal2