import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Ticket from '../components/Ticket';


function BookTicket(props) {
    return (
        <div>
            <Header />
            <div>
                <div className='link-to'>
                    <Link to='/event-description'>{`< Return to Event`}</Link>
                </div>
                <Ticket
                    name="AudioSlave Would tour"
                    artist="AudioSlave" />
            </div>

        </div >
    );
}

export default BookTicket;