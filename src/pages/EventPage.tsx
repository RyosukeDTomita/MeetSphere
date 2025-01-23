import React from 'react';
import { useParams } from 'react-router-dom';

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const handleParticipate = () => {
    console.log(`User participated in event ${id}`);
  };

  return (
    <div>
      <h1>Event Details</h1>
      <p>Details for event {id}</p>
      <button onClick={handleParticipate}>Participate</button>
    </div>
  );
};

export default EventPage;
