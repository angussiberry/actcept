import '../App.css';

function Banner(props) {
  return (
    <div className="Banner" style={{
      backgroundImage: `url(${props.img})`,
      backgroundPosition: ` left top`
    }} >
      <div className='banner-overlay'>
        <div className='banner-event'>
          <h1 className="banner-header">{props.title}</h1>
          <h4 className="banner-subtitle">{props.desc}
          </h4>
          <h6>Date: {props.date.split('T')[0]}</h6> {/*splitting date and time*/}
        </div>
        <button className='btn banner-btn'>See more</button>
      </div>

    </div>
  );
}
//
export default Banner;
