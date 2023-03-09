import React, { useEffect, useState } from 'react';
import '../css/main.css';

function Home(props) {
  const [textLoaded, setTextLoaded] = useState(false);
  const [buttonsLoaded, setButtonsLoaded] = useState(false);

  useEffect(() => {
    setTextLoaded(true);
    setTimeout(() => {
      setButtonsLoaded(true);
    }, 1000);
  }, []);

  return (
    <div className='body'>
      <h1 className={`fade-in ${textLoaded ? 'loaded' : ''}`}>Welcome to Beacon</h1>
      <h3 className={`fade-in ${textLoaded ? 'loaded' : ''}`}>Your personal budget snapshot app</h3>
      <p className={`fade-in ${textLoaded ? 'loaded' : ''}`}>Get started by creating an account or logging in to your existing account.</p>
      <div className="card">
        <div className={`card-body ${buttonsLoaded ? 'loaded' : ''}`}>
          <button className="homebutton"><a href="/signup">Create Account</a></button>
          <button className="homebutton"><a href="/login">Log In</a></button>
        </div>
      </div>
    </div>
  );
}

export default Home;
