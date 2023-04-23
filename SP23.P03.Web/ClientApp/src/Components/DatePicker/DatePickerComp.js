import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import "./DatePickerComp.css";
import 'react-datepicker/dist/react-datepicker.css'

function DatePickerComp({placeholder}){

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div className="datepicker-function-container">
            <DatePicker
                className="datepicker-styles"
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                dateFormat='yyyy/MM/dd'
                minDate={new Date()}
            />
        </div>
    )

}

export default DatePickerComp;

