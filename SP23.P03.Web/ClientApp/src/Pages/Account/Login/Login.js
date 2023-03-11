import React from 'react'
import './Login.css';

function Login() {
    return (
        <div className="login-container">
            <h1 className="login-header">
                Login
            </h1>
            <body className="login-body">
                <div className="Username">
                    <input type="text" placeholder="Username" className="username-input" />
                </div>
                <div className="Password">
                    <input type="text" placeholder="Password" className="password-input" />
                </div>
                <div className="button-submit">
                    <button className="Submit">Login</button>
                </div>
                <div className="divider">
                    <div className="or-divider" />or<div className="or-divider" />
                </div>
                <div className="button-sign-up">
                    <button className="Sign-Up">Sign Up</button>
                </div>
            </body>
        </div>
    )
}

export default Login;