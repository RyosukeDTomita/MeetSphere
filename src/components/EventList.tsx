import React from 'react';

const EventList: React.FC = () => {
  const events = [
    { id: '1', name: 'Event 1' },
    { id: '2', name: 'Event 2' },
    { id: '3', name: 'Event 3' },
  ];

  return (
    <div>
      <h2>Event List</h2>
      <ul>
        {events.map(event => (
          <li key={event.id}>{event.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
