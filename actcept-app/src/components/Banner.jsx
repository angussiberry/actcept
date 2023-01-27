import '../App.css';
import { Link } from 'react-router-dom';
function Banner(props) {
  return (
    <div className="Banner" style={{
      backgroundImage: `url(${props.img})`,
      backgroundPosition: ` center center`,
      backgroundRepeat: `no-repeat`,
      objectFit: 'scale-down',
      backgroundSize: `cover`
    }} >
      <div className='banner-overlay'>
        <div className='banner-event'>
          <h1 className="banner-header">{props.title}</h1>
          <h4 className="banner-subtitle">{props.desc}
          </h4>
          <h6>Date: {props.date.split('T')[0]}</h6> {/*splitting date and time*/}
        </div>
        <Link to='/event-description'
          state={props.id}>
          <button className='btn banner-btn'>See more</button>
        </Link>

      </div>

    </div>
  );
}
//
export default Banner;
