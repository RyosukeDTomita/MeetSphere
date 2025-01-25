import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CalendarPage from './pages/CalendarPage';
import SearchEventPage from './pages/SearchEventPage';
import CreateEventPage from './pages/CreateEventPage';

export default function MyApp() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/calendar">カレンダーで探す</Link>
            </li>
            <li>
              <Link to="/searchevent">イベントの条件を探す</Link>
            </li>
            <li>
              <Link to="/createevent">イベントを作成する</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/searchevent" element={<SearchEventPage />} />
          <Route path="/createevent" element={<CreateEventPage />} />
        </Routes>
      </div>
    </Router>
  );
}
