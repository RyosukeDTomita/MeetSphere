import React from 'react';

const EventDetails: React.FC = () => {
  const event = {
    id: '1',
    name: 'Event 1',
    description: 'This is the description for Event 1.',
    date: '2023-09-01',
    location: 'Location 1',
  };

  return (
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>Date: {event.date}</p>
      <p>Location: {event.location}</p>
    </div>
  );
};

export default EventDetails;
