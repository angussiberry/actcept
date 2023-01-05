import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <div className="Header">
      <div className="header-left">
        <span>ActCept | </span>
        <span>Part of GigStr</span>
      </div>
      <Link to={"/my-events"}>My Events</Link>
    </div>
  );
}

export default Header;
