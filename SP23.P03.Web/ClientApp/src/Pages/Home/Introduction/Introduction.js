import React from "react";
import "./Introduction.css";
import { Link } from "react-router-dom";

function Introduction() {
  return (
    <div className="intro-container">
      <div className="intro">
        <body className="intro-body">
          <h4 className="intro-entrack-name">EnTrack</h4>
          is a modern and efficient transportation service 
          that offers a comfortable and convenient way to travel. 
          Whether you're commuting to work or exploring new destinations, 
          EnTrack provides a reliable and enjoyable travel experience. 
          With state-of-the-art technology and spacious seating, 
          EnTrack is perfect for both business and leisure travel. 
          Plus, with frequent departures and multiple routes, 
          EnTrack makes it easy to get where you need to go. 
          So sit back, relax, and enjoy the ride with Entrack!
        </body>
      </div>
      <div className="intro-sign-up">
        <Link to="/sign-up">
          <body className="intro-sign-up-button">
            New Here? Sign Up!
          </body>
        </Link>
      </div>
    </div>
  );
}

export default Introduction;