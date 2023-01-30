import React from 'react';


function EventInfoCard(props) {
    return (
        <div className="Event">
            <div className="event-body">
                <p className="event-date">{props.date}</p>
                <p className="event-location">{props.venue_name}</p>
                <h1 className="artist-name">{props.artist_name}</h1>
                <p className="description">{props.event_description}</p>
            </div>
        </div>
    );
}

export default EventInfoCard;
