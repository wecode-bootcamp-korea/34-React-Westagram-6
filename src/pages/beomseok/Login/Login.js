import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './login.scss';
// import '../../styles/common.scss';

const Login = () => {
  const navigate = useNavigate();
  // const [button, setButton] = useState(true);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const goToMain = () => {
    navigate('/Main-beomseok');
  };
  const changeColor = id.includes('@') && pw.length >= 5;

  return (
    <div className="centerbox">
      <div className="logo">
        <a href="login.html">westagram</a>
      </div>
      <form id="login">
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
        <button
          type="button"
          className="box btn"
          disabled={changeColor ? false : true}
          onClick={goToMain}
        >
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
