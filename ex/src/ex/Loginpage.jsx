import React, { useState } from 'react';
import './Loginpage.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();


// async: 비동기(await 사용하려면 필수수)
// , preventDefault: 새로고침 막기 (form은 자동으로 새로고침 됨)


//예외 처리
    try {   
      const res = await fetch('http://113.198.229.158:8880/auth/login', {//await 비동기 처리 (사실 굳이인 것 같긴한데 하면 좋으니깐 ^^)
        method: 'POST',
        // headers: {
        //   'Content-Type': 'application/json',
        // }, 이건 아닌듯
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json(); // await fetch 값 date에 넣기

      if (res.ok) {

        // console.log('서버 응답:', data); //디버그용용
        localStorage.setItem('token', data.token); // 토큰저장 토큰 형식은 알아서 바꿔야 함
      } else {
        setMessage(`로그인 실패`);
      }
    } catch (error) {
      // console.error('서버 오류:', error); 디버그용용
      setMessage('error');
    }
  };





  //----------------------------------------------------------------------------------------------------
  return (
    <div className="login-container">
    
      <form className="login-form" onSubmit={handleLogin}>
        <div className="logo-container">
          <img src="/logo.png" alt="logo" />
        </div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Sign in</button>
        <div className="login-links">
          아이디 찾기 | 비밀번호 찾기 | 회원 가입
        </div>
        {message && <p className="login-message">{message}</p>}
      </form>
    </div>
  );
};

export default LoginPage;
