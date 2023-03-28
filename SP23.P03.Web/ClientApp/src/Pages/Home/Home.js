import React from "react";
import "./Home.css";
import Intro from './Introduction/Introduction.js';

function Home() {
  return (
    <div className="home-container">
      <body className="home-body">
        <h1 className="home-header">
          Welcome to EnTrack
        </h1>
        <div className="home-intro">
          <Intro />
        </div>
      </body>
    </div>
  );
}

export default Home;