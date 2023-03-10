import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import StoreIcons from "../Materials/googleplay-appstore.png";

function Footer() {
  return (
    <div className="footer-container">
        <body className="footer-body">
            <div>
                <div className="footer-left-content">
                    <div className="footer-paragraph">
                        <h4 className="entrack-name">Entrack</h4>
                        is a modern and efficient transportation service 
                        that offers a comfortable and convenient way to travel. 
                        Whether you're commuting to work or exploring new destinations, 
                        Entrack provides a reliable and enjoyable travel experience. 
                        With state-of-the-art technology and spacious seating, 
                        Entrack is perfect for both business and leisure travel. 
                        Plus, with frequent departures and multiple routes, 
                        Entrack makes it easy to get where you need to go. 
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
                                <li><NavLink className="links" to="/">Home</NavLink></li>
                                <li><NavLink className="links" to="/tickets">Tickets</NavLink></li>
                                <li><NavLink className="links" to="/schedule">Schedule</NavLink></li>
                                <li><NavLink className="links" to="/rewards">Rewards</NavLink></li>
                                <li><NavLink className="links" to="/login">Login</NavLink></li>
                                <li><NavLink className="links" to="/sign-up">Sign Up</NavLink></li>
                            </div>
                        </div>
                        <div className="important-links">
                            <h4 className="important-links-header">
                                Devoloper Tools:
                            </h4>
                            <div className="link-list">
                                <li><NavLink className="links" to="/swagger/index.html" target="_blank">
                                    Devoloper (Swagger)
                                </NavLink></li>
                            </div>
                        </div>
                    </div>
                    <div className="store-icons">
                        <img src={StoreIcons} alt="App store icons" />
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="legal">© 2023 Entrack Inc.</div>
                <div className="address">500 W University Ave, Hammond, LA 70402</div>
            </div>
        </body>
    </div>
  );
}

export default Footer;
