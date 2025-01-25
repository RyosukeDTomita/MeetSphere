import React from 'react';
import { useNavigate } from 'react-router-dom';
import EventList from '../components/EventList';

const SearchEventPage: React.FC = () => {
  const navigate = useNavigate();

  // const handleEventClick = (eventId: string) => {
  //   navigate(`/events/${eventId}`);
  // };

  return (
    <EventList />
  );
};

export default SearchEventPage;
