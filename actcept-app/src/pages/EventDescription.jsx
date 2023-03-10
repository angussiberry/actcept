import React from 'react';
import EventDescriptionBanner from '../components/EventDescriptionBanner';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import EventInfo from '../components/EventInfo';
import EventContent from '../components/EventContent';
import { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import AddReview from '../components/AddReview';
import ReviewCard from '../components/ReviewCard';


function EventDescription() {
    const location = useLocation();
    const state = location.state;
    const [event, setEvent] = useState([]);
    const [venue, setVenue] = useState([]);
    const [review, setReview] = useState([]);
    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/reviews/all`);
                const data = await response.json();
                const newData = data.filter(obj => obj.event_id === state)
                setReview(newData);
                console.log(review)
            } catch (error) {
                console.log(error);
            }
        };

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
                const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/venues/getvenuebyevent/${state}`);
                const data = await response.json();
                setVenue(data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
        fetchVenue();
        fetchReview();
    }, []);
    venue.length && console.log(venue[0].longtitude, venue[0].latitude)
    return (
        <div className="EventDescription">
            <Header />
            {event.length && venue.length ?
                <div className="main-content">
                    <EventDescriptionBanner
                        event_name={event[0].event_name}
                        img={event[0].image_url} />

                    <div className="event-info">
                        <EventInfo
                            date={event[0].event_date.split('T')[0]}
                            venue_name={event[0].venue_name}
                            artist_name={event[0].artist_name}
                            event_description={event[0].event_description}
                            GoogleMap_lat={parseFloat(venue[0].latitude)}
                            GoogleMap_lng={parseFloat(venue[0].longtitude)} />

                        <br />
                        <EventContent
                            id={event[0].event_id} />
                    </div>
                    <div>
                        <AddReview
                            name={event[0].event_name}
                            date={event[0].event_date.split('T')[0]}
                            event_id={event[0].event_id}
                            venue_name={event[0].venue_name}
                            artist_name={event[0].artist_name}
                        />
                        {review.length ? review.map(obj => (
                            <ReviewCard stars={obj.star_rating}
                                review={obj.description}
                                date={obj.date.split('T')[0]}
                                user_id={obj.user_id}
                            />
                        )) : null}

                    </div>
                </div>
                :
                null
            }
            <Footer />
        </div>

    );
}

export default EventDescription;
