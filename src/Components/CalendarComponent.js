import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.css"

const CalendarComponent = () => {
    const [date, setDate] = useState(new Date());
  
    // Object with special dates and their messages
    const specialDates = {
      '2024-02-14': 'Valentine\'s Day',
      '2024-04-01': 'April Fools\' Day',
      // Add more special dates as needed
    };
  
    const tileContent = ({ date }) => {
      const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
      return specialDates[formattedDate] && (
        <div className="special-date">
          {specialDates[formattedDate]}
        </div>
      );
    };
  
    const onChange = (newDate) => {
      setDate(newDate);
    };
  
    return (
      <div className='calendar-wrapper'>
        <Calendar
          onChange={onChange}
          value={date}
          tileContent={tileContent}
          className="custom-calendar"
        />
      </div>
    );
  };

export default CalendarComponent;