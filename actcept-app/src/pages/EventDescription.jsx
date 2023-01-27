import React from 'react';
import EventDescriptionBanner from '../components/EventDescriptionBanner';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import EventInfo from '../components/EventInfo';
import EventContent from '../components/EventContent';
import { useState, useEffect } from 'react';


function EventDescription() {
    const location = useLocation();
    const state = location.state;
    const [event, setEvent] = useState([]);
    const [venue, setVenue] = useState([]);
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
        const fetchVenue = async () => {
            try {
                const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/events/getvenuebyevent/${state}`);
                const data = await response.json();
                setVenue(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        fetchVenue();
    }, []);
    venue.length && console.log(venue[0].longtitude, venue[0].latitude)
    return (
        <div className="EventDescription">
            <Header />
            <div className="main-content">
                {event.length ? <EventDescriptionBanner
                    event_name={event[0].event_name}
                    img={event[0].image_url} /> : null}

                <div className="event-info">
                    {event.length && venue.length ? <EventInfo
                        date={event[0].event_date.split('T')[0]}
                        venue_name={event[0].venue_name}
                        artist_name={event[0].artist_name}
                        event_description={event[0].event_description}
                        GoogleMap_lat={parseFloat(venue[0].latitude)}
                        GoogleMap_lng={parseFloat(venue[0].longtitude)} /> : null}

                    <br />
                    {event.length ? <EventContent
                        id={event[0].event_id} /> : null}
                </div>
            </div>
        </div>
    );
}

export default EventDescription;
