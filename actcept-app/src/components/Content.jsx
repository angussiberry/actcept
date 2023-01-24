import '../App.css';
import Card from './Card';
import Search from './Search';
import React, { useState, useEffect } from 'react';
import GoogleMap from './GoogleMap';

function Content() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/events/all');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const cards =
    <>
      <Card
        title="Hello"
        img="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_960_720.jpg"
        desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        date="10/12/2023" />
      <Card
        title="this"
        img="https://cdn.pixabay.com/photo/2017/01/04/15/59/feather-1952382_960_720.jpg"
        desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        date="10/12/2023" />
      <Card
        title="is"
        img="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg"
        desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        date="10/12/2023" />
      <Card
        title="is"
        img="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg"
        desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        date="10/12/2023" />
      <Card
        title="is"
        img="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg"
        desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        date="10/12/2023" />
      <Card
        title="a"
        img="https://cdn.pixabay.com/photo/2018/01/03/05/33/the-sun-3057622_960_720.jpg"
        desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        date="10/12/2023" />
      <Card
        title="CARD"
        img="https://cdn.pixabay.com/photo/2019/05/10/20/11/roof-truss-4194408_960_720.jpg"
        desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
        date="10/12/2023" />
    </>
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
          />
        ))}
        {cards}

      </div>
      <GoogleMap lat={37.7749} lng={-10.4194} />

    </div>

  );
}

export default Content;
