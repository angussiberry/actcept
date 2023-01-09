import React from 'react';


function Ticket(props) {
    return (
        <>
            <div className='ticket-container'>
                <div className='ticket-left'>
                    <div>
                        <h1>{props.name}</h1>
                        <h1>Artists: {props.artist}</h1>
                    </div>
                    <div className='ticket-info'>
                        <div>
                            <h4 className='ticket-labels'>Your Name:</h4>
                            <input className='ticket-input' type="text" name="" id="" />
                        </div>
                        <div>
                            <h4 className='ticket-labels'>Your Email:</h4>
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
        </>
    );
}

export default Ticket;