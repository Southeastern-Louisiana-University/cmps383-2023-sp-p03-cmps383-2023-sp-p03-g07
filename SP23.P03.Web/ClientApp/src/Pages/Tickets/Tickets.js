import React from 'react'
import './Tickets.css';

function Tickets() {
    return (
        <div className="tickets-container">
            <h1 className="tickets-text-center">
                Tickets
            </h1>
            <body className="tickets-body-content">
                <div className="tickets-paragraph">
                    Welcome to the tickets page!
                    <br />
                    Here we will be able to see ticket information.
                </div>
            </body>
        </div>
    )
}

export default Tickets;