import '../App.css';
import Card from './Card';
import Search from './Search';
import React, { useState, useEffect } from 'react';

function Content() {
  const [events, setEvents] = useState([]);
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

  return (
    <div>
      <Search />
      <div className="card-deck">
        {events.map(event => (
          <Card key={event.event_id}
            title={event.event_name}
            img={event.image_url}
            desc={event.event_description}
            date={event.event_date}
            id={event.event_id}
          />
        ))}

      </div>
    </div>

  );
}

export default Content;
