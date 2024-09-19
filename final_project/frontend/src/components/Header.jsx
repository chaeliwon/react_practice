import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
      <div className='header_section'>
        <h2>
          <Link to={'/'}>로고</Link>
        </h2>
      </div>
      <div className='header_section'>
        <a href="#">포트폴리오</a>
        <a href="#">블로그</a>
        <a href="#">GitHub</a>
      </div>
      <div className='header_section'>
        <Link to={'/login'}>로그인</Link>
        <Link to={'join'}>회원가입</Link>
      </div>
    </div>
  )
}

export default Header