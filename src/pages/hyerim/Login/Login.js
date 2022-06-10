import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/Main");
  };

  const [id, setId] = useState();
  const [pw, setPw] = useState();

  const handleInput = (e) =>{
    setId(e.target.value);
  };

  const isValid = id.includes("@") && pw.length > 5;

  return (
    <>
      <div id="login_box">
        <h1 className="logo">westagram</h1>
        <form class="input_box">
          <input
            type="text"
            className="id"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleInput}
          />
          <input type="password" className="password" placeholder="비밀번호" onChange={(e) => setPw(e.target.value)} />
          <button type="button" className="btn" onClick={goToMain}>
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
