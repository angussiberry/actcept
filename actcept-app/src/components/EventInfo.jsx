import '../App.css';
import EventInfoCard from './EventInfoCard';
import GoogleMap from './GoogleMap';

function EventInfo() {
  const EventInfoCards = 
  <>
      <EventInfoCard 
      date = "09-01-2023"
      venue_name = "NEW WHARF SPACE"
      artist_name = "Alex"
      event_description = "Amazing event for amazing people!"/>
  </>
  return (
    <div>
      <div className = "Event_Card">
        {EventInfoCards}
        <GoogleMap lat={51.5167} lng={-0.0833333} />
        </div>
      </div>
  )
}



export default EventInfo;

