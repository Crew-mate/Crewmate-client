import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPw] = useState('');

  const [emailValid, setEmailValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  useEffect(() => {
    if (emailValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [emailValid, pwValid]);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    const regex =
      /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i;
    if (regex.test(e.target.value)) {
      setEmailValid(true);
    } else {
      setEmailValid(false);
    }
  };
  const handlePw = (e) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };
  const onClickConfirmButton = async () => {
    const data = { email, password: password }
    try {
      const response = await axios.post('http://localhost:5000/users/login', data)
      if (response.status === 200) {
        alert('로그인에 성공하셨습니다')
      }
    } catch (error) {
      alert('회원이 아닙니다')
    }
  }

  return (
    <div className='round'>
      <div className="page">
        <div className="title">
          Crew mate
        </div>

        <div className="contentWrap">
          <div className="inputTitle">이메일 주소</div>
          <div className="inputWrap">
            <input
              className="input"
              type="text"
              placeholder="test@gmail.com"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="errorMessageWrap">
            {!emailValid && email.length > 0 && (
              <div>올바른 이메일을 입력해주세요.</div>
            )}
          </div>

          <div className="inputTitle">
            비밀번호
          </div>
          <div className="inputWrap">
            <input
              className="input"
              type="password"
              placeholder="영문, 숫자, 특수문자 포함 8자 이상"
              value={password}
              onChange={handlePw}
            />
          </div>
          <div className="errorMessageWrap">
            {!pwValid && password.length > 0 && (
              <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
            )}
          </div>
        </div>

        <div>
          <div>
            <button className="SignUp_btn"><Link to="/signup">회원가입</Link></button>
          </div>
          <button onClick={onClickConfirmButton} disabled={notAllow} className="submitBtn">
            Log in
          </button>
        </div>
      </div>
    </div>
  );
}