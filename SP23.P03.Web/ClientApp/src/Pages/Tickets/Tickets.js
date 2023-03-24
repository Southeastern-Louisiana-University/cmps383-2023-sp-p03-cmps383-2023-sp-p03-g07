import React from 'react'
import './Tickets.css';

function Tickets() {
    return (
        <div className="content-box">
            <main>
                <div className="tickets-container">
                    <h1 className="tickets-text-center">
                        Tickets
                    </h1>
                    <body className="tickets-body-content">
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
        </div>
    )
}

export default Tickets;