import './Tickets.css';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from '../../Components/SearchBar/SearchBar';
import DatePickerComp from '../../Components/DatePicker/DatePickerComp';
import StationMap from '../../Components/Images/station_map.png';

import { motion } from 'framer-motion';

export default function Tickets() {

    const [stations, setStations] = useState()

    useEffect(() => {
        fetch("/api/stations").then(response => response.json())
        .then(data => setStations(data));
    }, []);


//console.log(stations);

    return (
        <motion.div
            className="content-box"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ delay: 0.1 }}
        >
            <main>
                <div className="tickets-container">
                    <h1 className="tickets-text-center">
                        Search for Tickets
                    </h1>
                    <body className="tickets-body-content">
                        <div className="get-tickets">
                            <div className="station-map-container">
                                <img className="station-map" src={StationMap} alt="Station Map" />
                            </div>
                            <div className="searchbar-container">
                                <SearchBar placeholder="Departing From" data={stations} />
                                <SearchBar placeholder="Destination" data={stations} />
                            </div>
                            <div className="dates-title-container">
                                <body className="start-date-title">Date:</body>
                            </div>
                            <div className="dates-container">
                                <div className="dates-separator"><DatePickerComp/></div>
                            </div>
                            <div className="find-button-container">
                                <Link to="/ticket-list">
                                    <button className="find-button">Find Tickets</button>
                                </Link>
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
        </motion.div>
    )

}

