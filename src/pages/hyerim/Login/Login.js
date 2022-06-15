import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    fetch('http://10.58.6.158:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result => localStorage.setItem('test', result.access_token));
    navigate('/Main-hyerim');
  };

  return (
    <>
      <div id="loginBox">
        <h1 className="logo">westagram</h1>
        <form className="inputBox">
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
            disabled={isValid ? false : true}
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
