import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import EventListPage from './pages/EventListPage';
import EventPage from './pages/EventPage';
import CreateEventPage from './pages/CreateEventPage';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CalendarPage} />
        <Route path="/events" component={EventListPage} />
        <Route path="/events/:id" component={EventPage} />
        <Route path="/create-event" component={CreateEventPage} />
      </Switch>
    </Router>
  );
};

export default App;
