import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

function Login() {

    return (
        <div className="content-box">
            <motion.div
                className="login-container"
                initial={{ scale: 0.75, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1 }}
            >
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
                                placeholder="Username or Email"
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
            </motion.div>
        </div>
    )
}

export default Login;