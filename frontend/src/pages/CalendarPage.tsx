import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from '../components/Calendar';
import EventList from '../components/EventList';

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <div>
      <h1>Calendar Page</h1>
      <p>Select a date to view events.</p>
      <Calendar onDateClick={handleDateClick} />
      {selectedDate && <EventList date={selectedDate} />}
    </div>
  );
};

export default CalendarPage;
