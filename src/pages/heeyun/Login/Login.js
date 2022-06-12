import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main-heeyun');
  };

  const [id, setId] = useState('');
  const [password, setPw] = useState('');

  // const handleIdInput = e => {
  //   setId(e.target.value);
  // };

  // const handlePwInput = e => {
  //   setPw(e.target.value);
  // };

  return (
    <div className="loginWrapper">
      <div className="container">
        <div className="top">
          <h2>Westagram</h2>
          <div className="inputbox">
            <input
              className="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              onChange={e => setId(e.target.value)}
            />
            <input
              className="idInput"
              type="text"
              placeholder="비밀번호"
              onChange={e => setPw(e.target.value)}
            />
          </div>
          <div className="btn">
            <button className="loginbutton" onClick={goToMain}>
              로그인
            </button>
          </div>
        </div>
        <div className="bottom">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
