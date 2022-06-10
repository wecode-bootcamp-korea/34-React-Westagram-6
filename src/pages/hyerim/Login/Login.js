import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const isValid = id.includes('@') && pw.length >= 5;

  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/Main');
  };

  return (
    <>
      <div id="login_box">
        <h1 className="logo">westagram</h1>
        <form class="input_box">
          <input
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
          <input
            type="password"
            className="password"
            placeholder="비밀번호"
            onChange={handlePwInput}
          />
          <button
            type="button"
            className="btn"
            onClick={goToMain}
            style={{ backgroundColor: isValid ? '#2a5682' : '#c4e0fc' }}
          >
            로그인
          </button>
        </form>
        <p className="forgetPw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </p>
      </div>
    </>
  );
};

export default Login;
