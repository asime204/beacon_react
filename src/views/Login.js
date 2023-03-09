import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login({ logMeIn }) {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    const url = 'http://localhost:5000/api/login';
    const options = {
      method: 'POST',
      headers: {
        Authorization: `Basic ${btoa(username + ':' + password)}`,
      },
    };

    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    if (data.status === 'ok') {
      logMeIn(data.user, data.username);
      navigate('/feed');
    } else {
      setLoginError('Username or password is incorrect.');
    }
  };

  return (
    <div className='login-body' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#2c3e50', height: '100vh' }}>
      <div className='login-form' style={{ width: '400px', padding: '20px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', borderRadius: '10px', backgroundColor: '#fff' }}>
        <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Login</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <input placeholder= "Username" name="username" style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <input placeholder= "Password" name="password" type="password" style={{ display: 'block', width: '100%', padding: '10px', borderRadius: '20px', border: '1px solid #ccc' }} />
          </div>
          <button className="btn btn-success" type="submit" style={{ width: '100%', padding: '10px', borderRadius: '20px', border: 'none', backgroundColor: '#e6e6fa', color: '#2c3e50', fontWeight: 'bold' }}>Log In</button>
        </form>
        {loginError && <p style={{ color: 'red', marginTop: '10px' }}>{loginError}</p>}
      </div>
    </div>
  );
}