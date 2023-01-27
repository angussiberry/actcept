import '../App.css';

function EventDescriptionBanner(props) {
  return (
    <div className="Event_Banner">
      <img src="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_960_720.jpg" />
      <h1 className="banner-header">{props.event_name}</h1>
    </div>
  );
}



export default EventDescriptionBanner;