import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

function EventDescription(props) {
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
            <h1>This</h1>
            <h1>is</h1>
            <h1>EventDescription of {event.length ? event[0].event_name : null}</h1>
            <Link to='/book-ticket' className='btn' >Book Ticket</Link>
        </div>
    );
}

export default EventDescription;