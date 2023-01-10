import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function EventDescription() {
    return (
        <div className="EventDescription">
            <Header />
            <h1>This</h1>
            <h1>is</h1>
            <h1>EventDescription</h1>
            <Link to='/book-ticket' className='btn' >Book Ticket</Link>
        </div>
    );
}

export default EventDescription;