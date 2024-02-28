import React, { useState } from 'react';
import Calendar from 'react-calendar';
import "react-calendar/dist/Calendar.css";
import "./CalendarComponent.css"

const CalendarComponent = ({user}) => {
    const [date, setDate] = useState(new Date());
  
    const importantDates = [
      new Date('2024-02-14'),
      new Date('2024-04-01'),
    ];

    // adding dates worked out onto the array above
    user.workouts.map((temp) => {
        {importantDates.push(new Date(temp.workoutDate))}
    })
  
    const tileClassName = ({ date, view }) => {
      // Check if the date is in the array of important dates
      if (importantDates.find(d => d.toDateString() === date.toDateString())) {
        return 'important-date';
      }
      return null;
    };
  
    const onChange = (newDate) => {
      setDate(newDate);
    };
  
    return (
      <div className='calendar-wrapper'>
        <Calendar
          onChange={onChange}
          value={date}
          tileClassName={tileClassName}
          className="custom-calendar"
        />
      </div>
    );
  };

export default CalendarComponent;