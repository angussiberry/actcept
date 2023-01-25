import React from 'react';
import EventDescriptionBanner from '../components/EventDescriptionBanner';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import EventInfo from '../components/EventInfo';
import EventContent from '../components/EventContent';
// import GoogleMap from '../components/GoogleMap';


function EventDescription() {
    return (
        <div className="EventDescription">
            <Header />
            <div className="main-content">
                <EventDescriptionBanner
                    event_name = "Event Name"/>
                <div className="event-info">
                    <EventInfo/>
                    <br/>
                    <EventContent/>              
                </div>
            </div>
        </div>
    );
}

export default EventDescription;
