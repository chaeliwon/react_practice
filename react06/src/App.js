import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './page/HomePage';
import AboutPage from './page/AboutPage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';

// Route : 요청 URL을 묶어서 관리하는 컴포넌트
// Routes : 요청 URL에 맞는 화면 컴포넌트를 렌더링해주는 컴포넌트

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/product' element={<ProductPage/>}/>
        <Route path='/product/:prd_no' element={<ProductDetailPage/>}/>
        {/* url 파라미터 방식 -> /product/100/shirts (/로 보내는 방식) */}
      </Routes>
    </div>
  );
}

export default App;
