// Layout.js

import React from 'react';
import Home from './Home/nav'

function Layout({ children }) {
  return (
    <div>
      <Home /> {/* 네비게이션 바 */}
      {children} {/* 각 페이지 컴포넌트 */}
    </div>
  );
}

export default Layout;
