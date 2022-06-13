import React, { useState } from 'react';
import './login.scss';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPw] = useState('');
  // const [disabled, setDisabled] = useState(true);

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
          <form
            onSubmit={event => {
              event.preventDefault();
              goToMain();
            }}
          >
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
