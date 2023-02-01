import React, { useState, useEffect } from 'react';
import postSignUp from '../utils/postSignup';
import { Link } from 'react-router-dom';
import checkEmail from '../utils/emailCheck';
import { useLocation } from 'react-router-dom';
import '../App.css';
import checkEvent from '../utils/eventCheck';

function AddReview(props) {
    const location = useLocation();
    const states = location.state;
    const [state, setState] = useState({ comment: "" });
    const [emailstate, setEmailState] = useState({ email: "" });
    const [text, setText] = useState("");
    const handleNameChange = (event) => {
        setState({ comment: event.target.value })
        console.log(state)
    }
    const handleEmailChange = (event) => {
        setEmailState({ email: event.target.value })
        console.log(emailstate)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookObj = { ...state, ...emailstate }
        const emailCheck = await checkEmail(bookObj.email) //wait here for response
        console.log(emailCheck)
        if (emailCheck.length !== 0) {
            console.log(emailCheck[0].user_id, props.event_id)
            const eventCheck = await checkEvent(emailCheck[0].user_id, props.event_id)    //here for duplicate sign up check                 
            console.log(eventCheck)
            if (eventCheck === true) {
                const errorString = "You've already reviewed this event"
                console.log(errorString)

            } else {
                await postSignUp(emailCheck[0].user_id, props.event_id, props.name)
                const successString = `Thank you for reviewing ${props.artist} at ${props.venue} !`
                console.log(successString)
            }

        } else {
            const errorString = 'Account Email does not exist'
            console.log(errorString)
        }
    }
    return (
        <>
            <div className='review-left'>
                <div className='ticket-info'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h3 className='ticket-labels'>Review</h3>
                            <div>
                                <input className='ticket-input' type="email" name={state.email} placeholder=' Account email' onChange={handleEmailChange} id="" />
                            </div>
                            <div class="rate">
                                <input type="radio" id="star5" name="rate" value="5" />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name="rate" value="4" />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name="rate" value="3" />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name="rate" value="2" />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name="rate" value="1" />
                                <label for="star1" title="text">1 star</label>
                            </div>
                        </div>
                        <div>
                            <textarea className='my-review' type="text" name={state.name} placeholder=' Tell us what you thought' onChange={handleNameChange} id="" />
                        </div>
                        <div>
                            <button type='submit' className='btn'>Submit</button>
                        </div>
                        <h5>{text}</h5>
                    </form>
                </div>
            </div>

        </>
    );
}

export default AddReview;
