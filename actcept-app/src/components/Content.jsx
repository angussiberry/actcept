import '../App.css';
import Card from './Card';
import Search from './Search';
import React, { useState, useEffect } from 'react';

function Content() {

  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [sort, setSort] = useState('date')
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/events/all');
        const data = await response.json();
        setEvents(data.filter(obj => obj.event_confirmation === 'accepted'));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  function handleSearch(query) {

    let filtered = events.filter(event => event.event_name.toLowerCase().includes(query.toLowerCase()) ||
      event.venue_name.toLowerCase().includes(query.toLowerCase()));
    setFilteredEvents(filtered);
    if (!sort) return
    filtered = filtered.sort((a, b) => {
      if (sort === 'date') {
        return a.event_date.split('T')[0].localeCompare(b.event_date.split('T')[0]);
      }
      else if (sort === 'location') {
        return a.venue_name.localeCompare(b.venue_name)
      }
      return a.event_name.localeCompare(b.event_name)
    });
    console.log(`Handling search`)
    setFilteredEvents(filtered);
  }
  const cards = <>
    {events.sort((a, b) => {
      if (sort === 'date') {
        return a.event_date.split('T')[0].localeCompare(b.event_date.split('T')[0]);
      }
      else if (sort === 'location') {
        return a.venue_name.localeCompare(b.venue_name)
      }
      return a.event_name.localeCompare(b.event_name)
    }).map(event => (
      <Card key={event.event_id}
        title={event.event_name}
        img={event.image_url}
        desc={event.event_description}
        venue={event.venue_name}
        date={event.event_date.split('T')[0]}
        id={event.event_id}
      />
    ))}
  </>

  return (
    <div>
      <Search handleSearch={handleSearch}
        setSort={setSort} />
      <div className="card-deck">

        {/* {console.log(`Filtered events ${filteredEvents}`)} */}

        {filteredEvents.length ? filteredEvents.map(event => (
          <Card key={event.event_id}
            title={event.event_name}
            img={event.image_url}
            desc={event.event_description}
            venue={event.venue_name}
            date={event.event_date.split('T')[0]}
            id={event.event_id}
          />
        )) :
          cards
        }

      </div>
    </div>

  );
}

export default Content;
