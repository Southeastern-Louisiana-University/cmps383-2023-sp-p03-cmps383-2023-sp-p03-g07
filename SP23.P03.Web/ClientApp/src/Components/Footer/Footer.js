import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import StoreIcons from "../Images/googleplay-appstore.png";

function Footer() {
  return (
    <div className="footer-container">
        <body className="footer-body">
            <div>
                <div className="footer-left-content">
                    <div className="footer-paragraph">
                        <h4 className="entrack-name">EnTrack</h4>
                        is a modern and efficient transportation service 
                        that offers a comfortable and convenient way to travel. 
                        Whether you're commuting to work or exploring new destinations, 
                        EnTrack provides a reliable and enjoyable travel experience. 
                        With state-of-the-art technology and spacious seating, 
                        EnTrack is perfect for both business and leisure travel. 
                        Plus, with frequent departures and multiple routes, 
                        EnTrack makes it easy to get where you need to go. 
                        So sit back, relax, and enjoy the ride with Entrack!
                    </div>
                </div>
                <div className="footer-right-content">
                    <div className="footer-right">
                        <div className="important-links">
                            <h4 className="important-links-header">
                                Important Links:
                            </h4>
                            <div className="link-list">
                                <li><Link className="links" to="/">Home</Link></li>
                                <li><Link className="links" to="/tickets">Tickets</Link></li>
                                <li><Link className="links" to="/schedule">Schedule</Link></li>
                                <li><Link className="links" to="/rewards">Rewards</Link></li>
                                <li><Link className="links" to="/login">Login</Link></li>
                                <li><Link className="links" to="/sign-up">Sign Up</Link></li>
                            </div>
                        </div>
                    </div>
                    <div className="store-icons">
                        <img src={StoreIcons} alt="App store icons" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="legal">© 2023 EnTrack</div>
                <div className="address">123 EnTrack Ave, Hammond, LA 70402</div>
            </div>
        </body>
    </div>
  );
}

export default Footer;
