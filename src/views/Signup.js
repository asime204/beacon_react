import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function SignUp() {
    const [redirect, setRedirect] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const reqBody = {
            username: username,
            email: email,
            password: password
        }

        const url = 'http://localhost:5000/api/signup'
        const options = {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": 'application/json'
            }
        }
        if (password!== confirmPassword) {
            console.log('oops password dont match')
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)
        if (data.status==='ok'){
            setRedirect(true)
        }

    };




    return redirect?<Navigate to='/login' />:
    
    (
        <div className='body'>
            <form onSubmit={handleSubmit}>
                <input placeholder= "Username" name='username' />
                <input placeholder= "Email" name='email' />
                <input placeholder= "Password" name='password' type='password'/>
                <input placeholder= "Confirm Password" name='confirmPassword' type='password'/>
                <button className="btn btn-success" type='submit'>Sign Up</button>


            </form>



        </div>
    )
}