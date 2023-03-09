import './Tickets.css';
import React, { useState, useEffect } from 'react';

export default function Tickets() {

    const [stations, setStations] = useState ();

    useEffect(() => {
        fetch("/api/stations").then(response => response.json())
        .then(data => setStations(data));
    }, []);

    return (
        <main>
            <div className="container">
                <h1 className="text-center">
                    Tickets
                </h1>
                <body className="body-content">
                    <div className="get-tickets">
                        <p>{JSON.stringify(stations)}</p>
                        <input></input>
                    </div>
                </body>
            </div>
        </main>
    )

}

