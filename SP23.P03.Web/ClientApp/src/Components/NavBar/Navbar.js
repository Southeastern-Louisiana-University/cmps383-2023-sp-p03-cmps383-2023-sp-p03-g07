import React from 'react'
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar">
            <div className="navItems">
                <NavLink href="/" className="navbar-logo">EnTrack</NavLink>
                <ul className="navbar-nav">
                    <li><NavLink className="nav-link" to="/">Home</NavLink></li>
                    <li><NavLink className="nav-link" to="/tickets">Tickets</NavLink></li>
                    <li><NavLink className="nav-link" to="/schedule">Schedule</NavLink></li>
                    <li><NavLink className="nav-link" to="/rewards">Rewards</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;