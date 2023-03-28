import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import './DropdownMobile.css';

function DropdownMobile() {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <nav className="drop-nav">
            <ul 
                className={isMobile ? "drop-links-show" : "drop-links-hide"}
                onClick={() => setIsMobile(false)}
            >
                <Link className="drop-link" exact to="/">
                    <li className="drop-list-links">Home</li>
                </Link>
                <Link className="drop-link" to="/tickets">
                    <li className="drop-list-links">Tickets</li>
                </Link>
                <Link className="drop-link" to="/schedule">
                    <li className="drop-list-links">Schedule</li>
                </Link>
                <Link className="drop-link" to="/rewards">
                    <li className="drop-list-links">Rewards</li>
                </Link>
                <Link className="drop-link" to="/login">
                    <li className="drop-list-links">Login</li>
                </Link>
                <Link className="drop-link" to="/sign-up">
                    <li className="drop-sign-up-link">Sign Up</li>
                </Link>
            </ul>
            <button
                className="mobile-button-icon"
                onClick={() => setIsMobile(!isMobile)}
            ><FaIcons.FaBars /></button>
        </nav>

    )
}

export default DropdownMobile;