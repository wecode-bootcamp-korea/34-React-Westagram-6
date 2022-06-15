import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.scss';

const Login = () => {
  const [password, setPw] = useState('');
  const [id, setId] = useState('');

  const server = e => {
    e.preventDefault();
    fetch('http://10.58.6.173:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: id,
        password: password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          goToMain();
        } else {
          alert('회원정보가 잘못되었습니다');
        }
      });
  };

  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/Main-heeyun');
  };

  const valid = id.includes('@') && password.length > 4;

  // 비구조화할당적용
  const handleIdInput = e => {
    const { value } = e.target;
    setId(value);
  };

  const handlePwInput = e => {
    const { value } = e.target;
    setPw(value);
  };

  return (
    <div className="loginWrapper">
      <div className="container">
        <div className="top">
          <h2>Westagram</h2>
          <form>
            <div className="inputbox">
              <input
                className="idInput"
                type="text"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                onChange={handleIdInput}
                // 비구조화 할당 미적용
                // onChange={e => setId(e.target.value)}
              />
              <input
                className="idInput"
                type="text"
                placeholder="비밀번호"
                onChange={handlePwInput}
                // onChange={e => setPw(e.target.value)}
              />
            </div>
            <button
              className={valid ? 'loginAbled' : 'loginDisabled'}
              onClick={server}
            >
              로그인
            </button>
          </form>
        </div>
        <div className="bottom">
          <span>비밀번호를 잊으셨나요?</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
