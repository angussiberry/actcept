import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Ticket from '../components/Ticket';
import { useLocation } from 'react-router-dom';


function BookTicket(props) {
    const location = useLocation();
    const state = location.state;

    return (
        <div>
            <Header />
            <div>
                <div className='link-to'>
                    <Link
                        to='/event-description'
                        state={state}
                    >{`< Return to Event`}</Link>
                </div>
                <Ticket
                    name="AudioSlave Would tour"
                    artist="AudioSlave" />
            </div>

        </div >
    );
}

export default BookTicket;