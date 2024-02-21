import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendar = ({user}) => {
  const [date, setDate] = useState(new Date());

  const tileContent = ({date,view}) => {
    // const specialDates = user.workouts.map((temp) => {
    //     temp.workoutDate +":"+ temp.activity+","
    // });

    const specialDates = {
        '2024-02-14':'check',
    };

    console.log(specialDates);

    const dateKey = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    if (specialDates[dateKey]) {
      return <p>{specialDates[dateKey]}</p>;
    }

    return null;
  }

  const onChange = (newDate) => {
    setDate(newDate);
    // You can add additional logic here when a date is selected
  };

  return (
    <div>
      <h1>Calendar Component</h1>
      <Calendar onChange={onChange} value={date} tileContent={tileContent}/>
      {/* You can add more components here to display and edit data for the selected date */}
    </div>
  );
};

export default Calendar;