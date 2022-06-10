import React from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };

  return (
    <div class="loginWrapper">
      <div class="container">
        <div class="top">
          <h2>Westagram</h2>
          <div class="inputbox">
            <input
              class="idInput"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input class="idInput" type="text" placeholder="비밀번호" />
          </div>
          <div class="btn">
            <button class="loginbutton" onClick={goToMain}>
              로그인
            </button>
          </div>
        </div>
        <div class="bottom">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
