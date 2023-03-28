/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./BannerMobile.css";
import { Link } from "react-router-dom";
import mainLogo from "../ImagesMobile/entrack_logo_mobile.png";

function BannerMobile() {
  return (
    <div className="banner-container-mobile">
      <div className="bannerLogo-mobile" title="Go to Entrack home">
        <Link className="navbar-logo-mobile" exact to="/">
          <img className="logo" src={mainLogo}></img>
        </Link>
      </div>
    </div>
  );
}

export default BannerMobile;
