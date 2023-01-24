import '../App.css';

function Banner() {
  return (
    <div className="Banner" style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2015/11/22/19/04/crowd-1056764_960_720.jpg")' }} >
      <div className='banner-overlay'>
        <div className='banner-event'>
          <h1 className="banner-header">props.event_name</h1>
          <h4 className="banner-subtitle">props.event_desc
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui, obcaecati, nostrum unde, doloribus ipsam consectetur nulla officia facere fugit vero repellendus! Vel quas recusandae unde reiciendis dolorem culpa accusamus?</h4>
        </div>
        <button className='btn banner-btn'>See more</button>
      </div>

    </div>
  );
}
//
export default Banner;
