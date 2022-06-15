import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const goToMain = () => {
    navigate('/Main-beomseok');
    fetch('http://172.20.10.3:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    })
      .then(response => response.json())
      .then(result =>
        localStorage.setItem('access_token', result.access_token)
      );
  };
  const changeColor = id.includes('@') && pw.length >= 5;

  return (
    <div className="centerbox">
      <div className="logo">
        <a href="login.html">westagram</a>
      </div>
      <form id="login" onSubmit={goToMain}>
        <input
          className="box inputId"
          type="text"
          placeholder="전화번호,사용자 이름 또는 이메일"
          onChange={e => setId(e.target.value)}
        />
        <input
          className="box inputPw"
          type="password"
          placeholder="비밀번호"
          onChange={e => setPw(e.target.value)}
        />
        <button type="submit" className="box btn" disabled={!changeColor}>
          로그인
        </button>
      </form>
      <a href="#" className="lostPw">
        비밀번호를 잊으셨나요?
      </a>
    </div>
  );
};

export default Login;
