/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import mainLogo from "../Images/entrack_logo.png";

function Banner() {
  return (
    <div className="banner-container">
      <div className="bannerLogo" title="Go to Entrack home">
        <Link className="navbar-logo" exact to="/">
          <img src={mainLogo}></img>
        </Link>
      </div>
      <div className="account-buttons">
        <div>
          <li className="generic-button">
            <Link className="navbar-login" to="/login">
              <body className="login-button">Login</body>
            </Link>
          </li>
        </div>
        <div>
          <li className="generic-button">
            <Link className="navbar-sign-up" to="/sign-up">
              <body className="sign-up-button">Sign Up</body>
            </Link>
          </li>
        </div>
      </div>
    </div>
  );
}

export default Banner;
