import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

// 클릭시 바로 이동은 Link 무언가 확인해야하는 로직이 있다면 useNavigate


const HomePage = () => {

  const navigate = useNavigate();

  const goToProduct =()=>{
    navigate("/product/325")
  };

  return (
    <div>
      <h1> HomePage</h1>
      <Link to ={"/about"}>About페이지로 이동</Link>
      <button onClick={goToProduct}>Product로 이동</button>
      <Link to={"/mypage"}>MyPage로 이동</Link>
    </div>
  )
}

export default HomePage