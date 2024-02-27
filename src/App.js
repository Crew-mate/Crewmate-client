import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import Calendar from './calendar/Calendar';
import Home from './Home/home';
import Club from './club/club';
import Join_cpu from './join_cpu/join_cpu'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/home" element={<Home />} /> 
        <Route path="/club" element={<Club />} /> 
        <Route path="/join_cpu" element={<Join_cpu />} /> 
      </Routes>
    </Router>
  );
}

export default App;