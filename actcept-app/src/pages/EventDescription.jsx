import React from 'react';
import EventDescriptionBanner from '../components/EventDescriptionBanner';
import Header from '../components/Header';
import EventInfo from '../components/EventInfo';
import EventContent from '../components/EventContent';

function EventDescription() {
    return (
        <div className="EventDescription">
            <Header />
            <EventDescriptionBanner/>
            <EventInfo/>
            <br/>
            <EventContent/>
        </div>
    );
}

export default EventDescription;
