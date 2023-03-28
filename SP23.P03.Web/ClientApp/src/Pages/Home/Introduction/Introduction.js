import React from "react";
import "./Introduction.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';

function Introduction() {

  const isDesktopLaptop = useMediaQuery({ query: '(min-width: 900px)'});
  const isTabletMobile = useMediaQuery({ query: '(max-width: 900px)' });

  return (
    <div className="intro-container">
      {isDesktopLaptop && <div className="intro">
        <body className="intro-body">
          Let the journey be your destination with our passenger train service!
        </body>
      </div>}
      {isTabletMobile && <div className="intro-mobile">
        <body className="intro-body-mobile">
          Let the journey be your destination with our passenger train service!
        </body>
      </div>}
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