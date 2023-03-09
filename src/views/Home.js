import React from 'react';
import '../css/main.css';

function Home(props) {
    // const { createPopup } = props;

    

    return (
        <div className='body'>
            <h1>Welcome to Beacon</h1>
            <h3>Your personal budget quickshot app</h3>
            <p>Get started by creating an account or logging in to your existing account.</p>
            <div className="card">
                <div className="card-body">
                    <button className="homebutton"><a href="/signup">Create Account</a></button>
                    <button className="homebutton"><a href="/login">Log In</a></button>
                    {/* <button onClick={createPopup}>Log In with Google</button> */}
                </div>
            </div>
        </div>
    );
}

export default Home;