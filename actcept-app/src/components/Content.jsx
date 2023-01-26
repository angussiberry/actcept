import '../App.css';
import Card from './Card';
import Search from './Search';
import React, { useState, useEffect } from 'react';

function Content() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/events/all');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function handleSearch(query) {
    const filtered = events.filter(event => event.event_name.toLowerCase().includes(query.toLowerCase()));
    setFilteredEvents(filtered);
  }
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <div className="card-deck">

        {/* {console.log(`Filtered events ${filteredEvents}`)} */}

        {filteredEvents.length ? filteredEvents.map(event => (
          <Card key={event.event_id}
            title={event.event_name}
            img={event.image_url}
            desc={event.event_description}
            date={event.event_date.split('T')[0]}
          />
        )) :
          events.map(event => (
            <Card key={event.event_id}
              title={event.event_name}
              img={event.image_url}
              desc={event.event_description}
              date={event.event_date.split('T')[0]}
            />
          ))}
      </div>
    </div>

  );
}

export default Content;
