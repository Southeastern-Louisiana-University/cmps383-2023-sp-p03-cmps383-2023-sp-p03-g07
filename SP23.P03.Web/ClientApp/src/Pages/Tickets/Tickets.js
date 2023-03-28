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
                    <SearchBar placeholder="From" data={stations}/>
                    <SearchBar placeholder="To" data={stations}/> 
                    <DatePickerComp/>
                    <DatePickerComp/>
                    <button>Find</button>


                                            {/* <div>{!stations ? null : stations.map(result =>{
                                                return( <p>{result.name}</p>)
                                            })}
                                            </div>
                                            <input></input> */}
                    </div>
                </body>
            </div>
        </main>
    )

}

