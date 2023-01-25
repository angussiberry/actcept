import '../App.css';

function EventDescriptionBanner(props) {
  return (
    <div className="Event_Banner">
      <img src={props.img} />
      <h1 className="banner-header">{props.event_name}</h1>
    </div>
  );
}



export default EventDescriptionBanner;