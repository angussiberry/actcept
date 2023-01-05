import { Link } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <div className="Header">
      <div className="header-left">
        <span>ActCept | </span>
        <span>Part of GigStr</span>
      </div>
      <div>
        <Link to={"/"} className="link">All Events</Link>
        <span> | </span>
        <Link to={"/my-events"} className="link">My Events</Link>


      </div>

    </div>
  );
}

export default Header;
