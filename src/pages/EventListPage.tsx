import React from 'react';
import { useHistory } from 'react-router-dom';

const EventListPage: React.FC = () => {
  const history = useHistory();

  const handleEventClick = (eventId: string) => {
    history.push(`/events/${eventId}`);
  };

  return (
    <div>
      <h1>Event List</h1>
      <p>Select an event to view details.</p>
      {/* Placeholder for event list component */}
      <div onClick={() => handleEventClick('1')}>Event 1</div>
      <div onClick={() => handleEventClick('2')}>Event 2</div>
    </div>
  );
};

export default EventListPage;
