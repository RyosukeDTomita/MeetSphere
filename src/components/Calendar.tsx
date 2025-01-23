import React from 'react';

const Calendar: React.FC = () => {
  const handleDateClick = (date: Date) => {
    console.log('Date selected:', date);
  };

  return (
    <div>
      <h2>Calendar</h2>
      <p>Select a date to view events.</p>
      {/* Placeholder for calendar component */}
      <div onClick={() => handleDateClick(new Date())}>Click a date</div>
    </div>
  );
};

export default Calendar;
