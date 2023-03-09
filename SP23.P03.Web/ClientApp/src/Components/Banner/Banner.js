import React from 'react'
import './Banner.css';
import { NavLink } from 'react-router-dom';
import mainLogo from '../Materials/entrack_logo.png';

function Banner() {
    return (
        <div className="banner-container">
            <div className="bannerLogo">
                <li><NavLink className="navbar-logo" exact to="/"><img src={mainLogo} alt="entrack logo"></img></NavLink></li>
            </div>
            <div className="account-buttons">
                <div className="login-button">
                    <li><NavLink className="navbar-login" to="/login">Login</NavLink></li>
                </div>
                <div className="sign-up-button">
                    <li><NavLink className="navbar-sign-up" to="/sign-up">Sign Up</NavLink></li>
                </div>
            </div>
        </div>
    )
}

export default Banner;