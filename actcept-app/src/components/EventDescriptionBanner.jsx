import '../App.css';

function EventDescriptionBanner(props) {
  return (
    <div className="Event_Banner">
        <div className="event-img">
          <img src={props.img} />
        </div>

      <h1 className="banner-header">{props.event_name}</h1>
    </div>
  );
}



export default EventDescriptionBanner;