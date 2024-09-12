import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import JoinForm from './components/JoinForm';
import LoginForm from './components/LoginForm';
import Main from './components/Main';


// 리액트 프로젝트 수정후 터미널 창에 'npm run build' 실행하기!⭐⭐⭐
function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/join' element={<JoinForm />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>



      {/* <h1>React-Node 연동 실습</h1> */}
      {/* <Form /> */}
      {/* <h1>회원가입 폼</h1>
     <JoinForm />
     <h1>로그인 폼</h1>
     <LoginForm /> */}
    </div>
  );
}

export default App;
