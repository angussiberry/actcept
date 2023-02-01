import React from 'react';
import Header from '../components/Header';
import EventList from "../components/EventList";
import BannerEvents1 from '../components/BannerEvents1';
import '../App.css';

function MyEvents() {
    return (
        <div className='my-events'>
            <Header />
            <BannerEvents1 />
            <div className='event-box upcoming'>
                <h6 className='title-event upcoming'>Upcoming Events</h6>
                <EventList />
            </div>
            <div className='event-box past'>
                <h6 className='title-event past'>Past Events</h6>
                <EventList />
            </div>
            <div className='event-box reviews'>
                <h6 className='title-event reviews'>Your Reviews</h6>
                You haven't left any reviews yet.
            </div>
        </div>

    );
}

export default MyEvents;