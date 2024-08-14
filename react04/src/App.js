import { createContext } from 'react';
import './App.css';
import { useState } from 'react';
import Left01 from './component/Left01';
import Right01 from './component/Right01';
import SubItem01 from './component/SubItem01';
import MyColor from './component/MyColor';
import Result from './component/Result';

//공유공간(context)생성

export const AppContext = createContext();
export const ColorContext = createContext();

function App() {
  // const[num, setNum] = useState(0)
  // num, setNum 을 Left01 과 Right01로 넘겨서(전달)
  // Right01에 있는 버튼을 클릭했을때
  // Left01에 있는 숫자를 바꾸고 싶습니다.


  //const [text, setText] = useState("여기에 입력됩니다")

  const [myColor, setMyColor]=useState('black')

  return (
    <div>
      <h1>색깔 속성 공유공간으로 보내주기!</h1>
      <div id='grid'>

        {/* AppContext.<Provider> : 공유공간 혀용하겠습니다.
        --> 허용된 컴포넌트의 자식 컴포넌트까지 전부 허용가능함
        -->value : 공유공간에서 공유하며 사용할 공유값 지정*/}



        {/* 예제1
        <AppContext.Provider value={{state : num, setState:setNum}}>
        <Left01></Left01>
        <Right01></Right01>
        </AppContext.Provider> */}

        {/* 예제 2
        <h1>Context 실습</h1>
        <AppContext.Provider value={setText}>
        <h1>{text}</h1>
        <SubItem01></SubItem01>
        </AppContext.Provider> */}


        <ColorContext.Provider value={{state : myColor, setState:setMyColor}}>
        <MyColor></MyColor>
        <Result></Result>
        </ColorContext.Provider>

        
      </div>
    </div>
  );
}

export default App;
