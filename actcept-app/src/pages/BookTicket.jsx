import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Ticket from '../components/Ticket';

import { useState, useEffect } from 'react';


function BookTicket(props) {
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
    return (
        <div>
            <Header />

            <div>
                {event.length && venue.length ?
                    <Ticket
                        name={event[0].event_name}
                        artist={event[0].artist_name}
                        venue={event[0].venue_name}
                        date={event[0].event_date.split('T')[0]}
                        img={event[0].image_url} />
                    :
                    null
                }
            </div>
        </div >
    );
}

export default BookTicket;