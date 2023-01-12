import '../App.css';
import EventInfoCard from './EventInfoCard';

function EventInfo() {
  const EventInfoCards = 
  <>
      <EventInfoCard 
      date = "09-01-2023"
      location = "NEW WHARF SPACE"
      name = "Alex"
      description = "Amazing event for amazing people!"/>
  </>
  return (
    <div>
      <div className = "Event_Card">
        {EventInfoCards}
      </div>
    </div>
  )
}



export default EventInfo;

