import './Tickets.css';
import React, { useState, useEffect } from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';

export default function Tickets() {

    const [stations, setStations] = useState()

    useEffect(() => {
        fetch("/api/stations").then(response => response.json())
        .then(data => setStations(data));
    }, []);


//console.log(stations);

    return (
        <main>
            <div className="container">
                <h1 className="text-center">
                    Tickets
                </h1>
                <body className="body-content">
                    <div className="get-tickets">
                    <SearchBar placeholder="From" data={stations}/>


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

