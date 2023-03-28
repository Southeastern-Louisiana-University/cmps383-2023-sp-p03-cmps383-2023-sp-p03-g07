import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="nav-items">
                    <li><NavLink className="nav-link" exact to="/">Home</NavLink></li>
                </div>
                <div className="nav-items">
                    <li><NavLink className="nav-link" to="/tickets">Tickets</NavLink></li>
                </div>
                <div className="nav-items">
                    <li><NavLink className="nav-link" to="/schedule">Schedule</NavLink></li>
                </div>
                <div className="nav-items">
                    <li><NavLink className="nav-link" to="/rewards">Rewards</NavLink></li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;