import React from 'react';
import EventDescriptionBanner from '../components/EventDescriptionBanner';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import EventInfo from '../components/EventInfo';
import EventContent from '../components/EventContent';
import { useState, useEffect } from 'react';
// import GoogleMap from '../components/GoogleMap';


function EventDescription() {
    const location = useLocation();
    const state = location.state;
    console.log(state)
    const [event, setEvent] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/events?event_id=${state}`);
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="EventDescription">
            <Header />
            <div className="main-content">
                {event.length ? <EventDescriptionBanner
                    event_name={event[0].event_name}
                    img={event[0].image_url} /> : null}

                <div className="event-info">
                    {event.length ? <EventInfo
                        date={event[0].event_date}
                        venue_name={event[0].venue_name}
                        artist_name="Alex"
                        event_description={event[0].event_description} /> : null}
                    <br />
                    <EventContent />
                </div>
            </div>
        </div>
    );
}

export default EventDescription;
