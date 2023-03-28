import React, { useState } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'

function DatePickerComp({placeholder}){

    const [selectedDate, setSelectedDate] = useState(null);

    return (
        <div>
            <DatePicker 
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='yyyy/MM/dd'
            minDate={new Date()}
            />
        </div>
    )

}

export default DatePickerComp;

