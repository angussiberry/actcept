import '../App.css';

function Banner(props) {
  return (
    <div className="Banner" style={{ backgroundImage: `url(${props.img})` }} >
      <div className='banner-overlay'>
        <div className='banner-event'>
          <h1 className="banner-header">{props.title}</h1>
          <h4 className="banner-subtitle">{props.desc}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi qui, obcaecati, nostrum unde, doloribus ipsam consectetur nulla officia facere fugit vero repellendus! Vel quas recusandae unde reiciendis dolorem culpa accusamus?</h4>
          <h6>{props.date}</h6>
        </div>
        <button className='btn banner-btn'>See more</button>
      </div>

    </div>
  );
}
//
export default Banner;
