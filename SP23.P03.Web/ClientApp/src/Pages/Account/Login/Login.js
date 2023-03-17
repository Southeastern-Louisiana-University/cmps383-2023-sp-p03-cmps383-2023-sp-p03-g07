import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="login-container">
            <body className="login-body">
                <h1 className="login-header">
                    Login
                </h1>
                <form name="login" className="login-form">
                    <div className="Username">
                        <input
                            name="username"
                            className="username-input"
                            type="text"
                            placeholder="Username"
                        />
                    </div>
                    <div className="Password">
                        <input
                            name="password"
                            className="password-input"
                            type="password"
                            placeholder="Password"
                        />
                    </div>
                    <div className="button-submit">
                        <input
                            className="Submit"
                            type="submit"
                            value="Login" />
                    </div>
                    <div className="divider">
                        <div className="or-divider" />or<div className="or-divider" />
                    </div>
                    <div className="button-sign-up">
                        <Link to="/sign-up">
                        <button className="Sign-Up">
                            Sign Up
                        </button>
                        </Link>
                    </div>
                </form>
            </body>
        </div>
    )
}

export default Login;