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
    <div className='body'>
      <div><form onSubmit={handleSubmit}>
        <input placeholder= "Username" name="username" />
        <input placeholder= "Password" name="password" type="password" />
        <button className="btn btn-success" type="submit">Log In</button>
      </form></div>
      

      {loginError && <p>{loginError}</p>}
    </div>
  );
}