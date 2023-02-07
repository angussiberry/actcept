import React from 'react';


function EventInfoCard(props) {
    return (
        <div className="Event">
            <div className="event-body">
                <h5 className="event-date">{props.date}</h5>
                <h5 className="event-location">{props.venue_name}</h5>
                <h1 className="artist-name">{props.artist_name}</h1>
                <h3 className="description">{props.event_description}</h3>
            </div>
        </div>
    );
}

export default EventInfoCard;
