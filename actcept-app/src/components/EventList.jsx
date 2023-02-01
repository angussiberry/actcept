import Card from './Card';
import React, { useState, useEffect } from 'react';

function EventList(props) {
    // console.log(props.events)
    const [cards, setCards] = useState(null)
    useEffect(() => {
        // console.log('in useEffect setting cards')
        setCards(<>
            {props.events !== null ? props.events.map(event => (
                <Card key={event.event_id}
                    title={event.event_name}
                    img={event.image_url}
                    desc={event.event_description}
                    venue={event.venue_name}
                    date={event.event_date.split('T')[0]}
                    id={event.event_id}
                />)) : null
            }
        </>)
    }, [props.events])

    return (
        <div>
            <div className="card-deck">
                {cards}
            </div>
        </div>
    );
}

export default EventList;