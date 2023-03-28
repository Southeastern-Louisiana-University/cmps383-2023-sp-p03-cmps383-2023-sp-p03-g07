import React from "react";
import "./Home.css";
import Intro from './Introduction/Introduction.js';
import { useMediaQuery } from 'react-responsive';

function Home() {

  const isDesktopLaptop = useMediaQuery({ query: '(min-width: 900px)'});
  const isTabletMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <div className="home-container">
      {isDesktopLaptop && <body className="home-body">
        <h1 className="home-header">
          Welcome to EnTrack
        </h1>
        <div className="home-intro">
          <Intro />
        </div>
      </body> }
      {isTabletMobile && <body className="home-body-mobile">
        <h1 className="home-header-mobile">
          Welcome to EnTrack
        </h1>
        <div className="home-intro-mobile">
          <Intro />
        </div>
      </body>
      }
    </div>
  );
}

export default Home;