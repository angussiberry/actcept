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
        <Link to={"/"}>All Events</Link>
        <span> | </span>
        <Link to={"/my-events"}>My Events</Link>


      </div>

    </div>
  );
}

export default Header;
