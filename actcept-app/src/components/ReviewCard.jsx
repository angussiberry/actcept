import React, { useState, useEffect } from 'react';
import postSignUp from '../utils/postSignup';
import { Link } from 'react-router-dom';
import checkEmail from '../utils/emailCheck';
import { useLocation } from 'react-router-dom';
import '../App.css';
import checkEvent from '../utils/eventCheck';

function ReviewCard(props) {
    const location = useLocation();
    const states = location.state;
    const [state, setState] = useState({ comment: "" });
    const [emailstate, setEmailState] = useState({ email: "" });
    const [text, setText] = useState("");
    const [stars, setStars] = useState("★ ★ ★ ★ ★");
    const [numstars, setNumStars] = useState("5/5 Stars");
    const starVal = 5

    //if (starVal === 5) {
    // setStars()
    // setNumStars()
    // //}

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
            <div className='review-card'>
                <div className='ticket-info'>
                    <div>
                        <div class="rate">
                            <p className='star'>{stars}</p><p>{numstars}</p>
                        </div>
                        <h5 className='rev-email'>email@email.com</h5>
                    </div>
                    <div>
                        <h5>"Amazing"</h5>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ReviewCard;
