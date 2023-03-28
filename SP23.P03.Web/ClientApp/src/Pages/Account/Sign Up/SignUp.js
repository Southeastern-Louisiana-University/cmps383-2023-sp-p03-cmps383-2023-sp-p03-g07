import React from 'react'
import './SignUp.css';

function SignUp() {
    return (
        <div className="content-box">
            <div className="signup-container">
                <body className="signup-body">
                    <h1 className="signup-header">
                        Sign Up
                    </h1>
                    <form name="sign-up" className="signup-form">
                        <div className="signup-Username">
                            <input 
                                name="username"
                                className="signup-username-input"
                                type="username" 
                                placeholder="Username"
                            />
                        </div>
                        <div className="signup-Email">
                            <input
                                name="email"
                                className="signup-email-input"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="signup-Password">
                            <input
                                name="password"
                                className="signup-password-input"
                                type="password"
                                placeholder="Password"
                            />
                        </div>
                        <div className="signup-Password">
                            <input
                                name="confirm-password"
                                className="signup-password-input"
                                type="password"
                                placeholder="Confirm Password"
                            />
                        </div>
                        <div className="button-create">
                            <input
                                className="Create"
                                type="submit"
                                value="Create"
                            />
                        </div>
                    </form>
                </body>
            </div>
        </div>
    )
}

export default SignUp;