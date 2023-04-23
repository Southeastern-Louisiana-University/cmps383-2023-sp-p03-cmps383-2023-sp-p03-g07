import React, {useState, useEffect, useContext} from 'react'
import './Login.css';
import { Link } from 'react-router-dom';

const AuthContext = React.createContext()
export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider(props){
    const [authUser, setAuthUser] = useState(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const value ={
        authUser,
        setAuthUser,
        isLoggedIn,
        setIsLoggedIn
    }

    return(
        <AuthContext.Provider value = {value}>{props.children}</AuthContext.Provider>
    )
}

function Login() {

    return (
        <div className="content-box">
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
            </div>
        </div>
    )
}

export default Login;