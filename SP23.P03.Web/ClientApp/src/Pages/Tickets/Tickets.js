import './Tickets.css';
import React, { useState, useEffect } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';
import DatePickerComp from '../../Components/DatePicker/DatePickerComp';

export default function Tickets() {

    const [stations, setStations] = useState()

    useEffect(() => {
        fetch("/api/stations").then(response => response.json())
        .then(data => setStations(data));
    }, []);


//console.log(stations);

    return (
        <main>
            <div className="tickets-container">
                <h1 className="tickets-text-center">
                    Tickets
                </h1>
                <body className="tickets-body-content">
                    <div className="get-tickets">
                        <div className="searchbar-container">
                            <SearchBar placeholder="Destination" data={stations} />
                            <SearchBar placeholder="Departing From" data={stations} />
                        </div>
                        <div className="dates-title-container">
                            <body className="start-date-title">Start Date:</body>
                            <body className="end-date-title">End Date:</body>
                        </div>
                        <div className="dates-container">
                            <div className="dates-separator-left"><DatePickerComp/></div>
                            <div className="dates-separator-right"><DatePickerComp/></div>
                        </div>
                        <div className="find-button-container">
                            <button className="find-button">Find</button>
                        </div>
                        {/* 
                        <div>{!stations ? null : stations.map(result =>{
                            return( <p>{result.name}</p>)
                        })}
                        </div>
                        <input></input> 
                        */}
                    </div>
                </body>
            </div>
        </main>
    )

}

