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
                    <li><NavLink className="nav-link" to="/tickets">Buy Tickets</NavLink></li>
                </div>
                <div className="nav-items">
                    <li><NavLink className="nav-link" to="/ticket-list">Ticket List</NavLink></li>
                </div>
                <div className="nav-items">
                    <li><NavLink className="nav-link" to="/payments">Payments</NavLink></li>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;