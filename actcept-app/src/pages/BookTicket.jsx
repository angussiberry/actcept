import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


function BookTicket(props) {
    return (
        <div>
            <Header />
            <div>
                <div className='link-to'>
                    <Link to='/event-description'>{`< Return to Event`}</Link>
                </div>
                <div className='ticket-container'>
                    <div className='ticket-left'>
                        <div>
                            <h1>Event Name: {props.name}</h1>
                            <h1>Artist at location: {props.artist}</h1>
                        </div>
                        <div className='ticket-info'>
                            <div>
                                <h4>Your Name:</h4>
                                <input className='ticket-input' type="text" name="" id="" />
                            </div>
                            <div>
                                <h4>Your Email:</h4>
                                <input className='ticket-input' type="email" name="" id="" />
                            </div>
                            <div>
                                <button className='book-button' type="submit">Book now!</button>
                            </div>
                        </div>

                    </div>
                    <div className='ticket-right'>
                        <h1>Right side</h1>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default BookTicket;