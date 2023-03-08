import React from 'react';
import '../css/main.css';

function Home() {
    return (
        <div className='body'>
            <h1>Welcome to Beacon</h1>
            <h3>Your personal financial tracking app</h3>
            <p>Get started by creating an account or logging in to your existing account.</p>
            <div className="card">
                <div className="card-body">
                    <button className="button"><a href="/signup">Create Account</a></button>
                    <button className="button"><a href="/login">Log In</a></button>
                </div>
            </div>
        </div>
    );
}

export default Home;