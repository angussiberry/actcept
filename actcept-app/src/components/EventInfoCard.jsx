import React from 'react';


function EventInfoCard(props) {
    return (
        <div class="Event">
            <div class="event-body">
                <p class="event-date">{props.date}</p>
                <p class="event-location">{props.location}</p>
                <h1 class="artist-name">{props.name}</h1>
                <p class="description">{props.description}</p>
            </div>
        </div>
    );
  }

  export default EventInfoCard;
  