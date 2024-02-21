import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Home from './Home/nav';
import Calendar from './calendar/Calendar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* 홈 화면으로 설정 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calendar" element={<Calendar />} /> 
      </Routes>
    </Router>
  );
}

export default App;
