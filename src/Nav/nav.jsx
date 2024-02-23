import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'

function Nav() {
  return (
    <div>
      <div className='wrapNav'>
        <p className='name'>CREW MATE</p>
        <div className='Nav'>
          <Link to="/Home">홈</Link>
          <Link to="/signup">동아리 소개</Link>
          <Link to="/calendar">달력 보기</Link>
        </div>
      </div>
    </div>
  );
}
export default Nav;
