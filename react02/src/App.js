import './App.css';


//JSX : JavaScript 와 Html 을 한번에 사용할 수 있는 문법
// --> 사용자 정의태그 (컴포넌트)를 만드는 방법

// 규칙1. 출력하고자 하는 태그들은 반드시 하나의 부모요소로 묶여 있어야한다.
// 규칙2. 표현식 사용 가능하다 (Javascript 변수를 html 에서 출력할 수 있다.)
// 규칙3. 모든 태그는 반드시 여는태그와 닫는태그가 존재한다.
// 규칙4. class -> className 을 사용한다.
function App() {

  let name = "채원";
  console.log(`${name}님 환영합니다.`);
  

  return (
    <div>
      <h1>My React01</h1>
      <h1>My React02</h1>

      <p>{name}님 환영합니다</p>
    </div>

  );
}

export default App;
