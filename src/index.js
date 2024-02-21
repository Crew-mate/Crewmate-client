import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import "./Login/Login.css"
import "./SignUp/SignUp.css" 
import "./calendar/calendar.css"
// import "./Home/home.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

