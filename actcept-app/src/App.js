import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import MyEvents from './pages/MyEvents';
import EventDescription from './pages/EventDescription';
import BookTicket from './pages/BookTicket';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/event-description" element={<EventDescription />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/" element={<Home />} />
          <Route path="/book-ticket" element={<BookTicket />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
