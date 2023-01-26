import '../App.css';
import EventInfoCard from './EventInfoCard';
import GoogleMap from './GoogleMap';

function EventInfo(props) {
  const EventInfoCards =
    <>
      <EventInfoCard
        date={props.date}
        venue_name={props.venue_name}
        artist_name={props.artist_name}
        event_description={props.event_description} />
    </>
  return (
    <div>
      <div className="Event_Card">
        {EventInfoCards}
        <GoogleMap lat={51.5167} lng={-0.0833333} />
      </div>
    </div>
  )
}



export default EventInfo;

