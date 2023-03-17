import React from 'react'
import './Schedule.css';

function Schedule() {
    return (
        <div className="schedule-container">
            <h1 className="schedule-text-center">
                Schedule
            </h1>
            <body className="schedule-body-content">
                <div className="schedule-paragraph">
                    Welcome to the schedule page!
                    <br />
                    Here we will be able to see the future departures.
                </div>
            </body>
        </div>
    )
}

export default Schedule;