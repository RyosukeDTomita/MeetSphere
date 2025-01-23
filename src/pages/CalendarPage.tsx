import React from 'react';
import { useHistory } from 'react-router-dom';

const CalendarPage: React.FC = () => {
  const history = useHistory();

  const handleDateClick = (date: Date) => {
    history.push('/events');
  };

  return (
    <div>
      <h1>Calendar</h1>
      <p>Select a date to view events.</p>
      {/* Placeholder for calendar component */}
      <div onClick={() => handleDateClick(new Date())}>Click a date</div>
    </div>
  );
};

export default CalendarPage;
