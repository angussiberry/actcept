import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import MyEvents from './pages/MyEvents';
import EventDescription from './pages/EventDescription';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/event-description" element={<EventDescription />} />
          <Route path="/my-events" element={<MyEvents />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
