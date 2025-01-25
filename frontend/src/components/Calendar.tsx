import React, { useState } from 'react';
import ReactCalendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface CalendarProps {
  onDateClick: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateClick }) => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate: Date) => {
    setDate(newDate);
    onDateClick(newDate);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <ReactCalendar onChange={handleDateChange} value={date} />
    </div>
  );
};

export default Calendar;
