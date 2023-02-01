import Header from '../components/Header';
import EventList from "../components/EventList";
import BannerEvents1 from '../components/BannerEvents1';
import '../App.css';
import React, { useState, useEffect } from 'react';

function MyEvents() {
    const [email, setEmail] = useState('')
    const [upcomingEvents, setUpcomingEvents] = useState(null)
    const [pastEvents, setPastEvents] = useState(null)
    console.log(`Email: ${email}`)

    useEffect(() => {
        const fetchUpcoming = async () => {
            try {
                const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/userevents/getupcomingeventsbyemail/${email}`);
                const data = await response.json();
                // console.log(`upcoming data: ${data}`)

                setUpcomingEvents(data);
            } catch (error) {
                console.log(error);
            }
        };
        const fetchPast = async () => {
            try {
                const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/userevents/getpasteventsbyemail/${email}`);
                const data = await response.json();
                // console.log(data)
                setPastEvents(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchPast();
        fetchUpcoming();
    }, [email])
    const handleSubmit = (query) => {
        setEmail(query)
        // console.log(`query:${query} test`)
    }
    return (
        <div className='my-events'>
            <Header />
            <BannerEvents1
                onSubmit={handleSubmit}
            />
            <div className='event-box upcoming'>
                <h6 className='title-event upcoming'>Upcoming Events</h6>
                <EventList
                    events={upcomingEvents} />
            </div>
            <div className='event-box past'>
                <h6 className='title-event past'>Past Events</h6>
                <EventList
                    events={pastEvents} />
            </div>
            <div className='event-box reviews'>
                <h6 className='title-event reviews'>Your Reviews</h6>
                You haven't left any reviews yet.
            </div>
        </div>

    );
}

export default MyEvents;