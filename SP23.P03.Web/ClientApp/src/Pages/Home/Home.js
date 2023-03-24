import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <body className="home-body">
        <h1 className="home-header">
          Welcome to EnTrack
        </h1>
        <div className="entrack-description-home">
          EnTrack is a modern and efficient transportation service 
          that offers a comfortable and convenient way to travel. 
          Whether you're commuting to work or exploring new destinations, 
          EnTrack provides a reliable and enjoyable travel experience. 
          With state-of-the-art technology and spacious seating, 
          EnTrack is perfect for both business and leisure travel. 
          Plus, with frequent departures and multiple routes, 
          EnTrack makes it easy to get where you need to go. 
          So sit back, relax, and enjoy the ride with Entrack!
        </div>
      </body>
    </div>
  );
}

export default Home;
