import React, { useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';

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

  // onSubmit={event => {
  //   event.preventDefault();
  //   goToMain();
  // }}

  // const [disabled, setDisabled] = useState('');

  const navigate = useNavigate();

  const valid = id.includes('@') && password.length > 4;

  const goToMain = () => {
    navigate('/Main-heeyun');
  };

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
          <form>
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
            <button
              className={valid ? 'loginAbled' : 'loginDisabled'}
              onClick={server}

              // disabled={disabled}
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

// <form className="inputbox">
//             <input
//               className="idInput"
//               type="text"
//               placeholder="전화번호, 사용자 이름 또는 이메일"
//               onChange={e => setId(e.target.value)}
//             />
//             <input
//               className="idInput"
//               type="text"
//               placeholder="비밀번호"
//               onChange={e => setPw(e.target.value)}
//             />
//
//
//             <button
//               className="loginbtn"
//               disabled={disabled}
//               onClick={() => {
//                 if (setId.includes('@') >= 0 && setPw.length > 4) {
//                   setDisabled(true);
//                 } else {
//                   setDisabled('false');
//                 }
//               }}
//             >
//               로그인
//             </button>
//          </form>
