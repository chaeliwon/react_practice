import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import ProductDetailPage2 from './page/ProductDetailPage2';
import { useEffect, useState } from 'react';
import LoginPage from './page/LoginPage';
import PrivateRouter from './page/PrivateRouter';

// Route : 요청 URL을 묶어서 관리하는 컴포넌트
// Routes : 요청 URL에 맞는 화면 컴포넌트를 렌더링해주는 컴포넌트

function App() {

  //로그인 상태를 보관하는 state 생성
  const [loginState, setLoginState] = useState(false);

  //값의 변화를 추적할때에도 useEffect를 활용 가능하다!
  useEffect(()=>{
    console.log("현재 로그인 상태:",loginState);

  },[loginState])


  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/product/:prd_no' element={<ProductDetailPage/>}/>
        {/* url 파라미터 방식 -> /product/100/shirts (/로 보내는 방식) */}
        <Route path='/productQuery' element={<ProductDetailPage2/>}/>
        <Route path='/login' element={<LoginPage setLoginState={setLoginState}/>}/>
        <Route path='/mypage' element={<PrivateRouter state={loginState}/>}/>
      </Routes>
    </div>
  );
}

export default App;
