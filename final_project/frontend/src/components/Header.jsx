import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Header = ({nick, setNick}) => {

  const [ login, setLogin ] = useState();
  const navigate=useNavigate()

  const logout =()=>{
    sessionStorage.removeItem("nick")
    setNick(null)
    navigate('/')
  }

  return (
    <div className='header'>
      <div className='header_section'>
        
        <Link to={'/'}>
        <img className='logo' src="/image-removebg-preview.png" alt="로고" />
        </Link>
        
      </div>
      <div className='header_section'>
        <a href="#">포트폴리오</a>
        <a href="#">블로그</a>
        <a href="#">GitHub</a>
      </div>
      <div className='header_section'>
        {nick===null?
          <div>
            <Link to={'/login'}>로그인</Link>
            <Link to={'/join'}>회원가입</Link>
          </div>
          :
          <span onClick={logout}>로그아웃</span>
        }
      </div>
    </div>
  )
}

export default Header