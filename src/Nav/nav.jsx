import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Nav/nav.css';

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 드롭다운 토글 함수
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className='wrapNav'>
        <p className='name'><Link to="/Home">CREW MATE</Link></p>
        <div className='Nav'>
          <Link to="/Home">홈</Link>
          <div className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <span>동아리 소개</span>
            {isDropdownOpen && (
              <div className="dropdown-content">
                <Link to="/Club">전체 페이지</Link>
                <Link to="/Club_cpu">cpu</Link>
                <Link to="/Club">Miven</Link>
                <Link to="/Club">App and Me</Link>
                <Link to="/Club">Miven</Link>
              </div>
            )}
          </div>
          <Link to="/calendar">달력 보기</Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
