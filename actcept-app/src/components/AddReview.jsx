import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import checkEmail from '../utils/emailCheck';
import { useLocation } from 'react-router-dom';
import '../App.css';
import checkEvent from '../utils/eventCheck';
import postReview from '../utils/postReview';
import checkReview from '../utils/revCheck';

function AddReview(props) {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = yyyy + '-' + mm + '-' + dd;
    console.log(today);
    //2022-02-6
    const location = useLocation();
    const states = location.state;
    const [state, setState] = useState({ comment: "" });
    const [starstate, setStarState] = useState({ star: 0 });
    const [emailstate, setEmailState] = useState({ email: "" });
    //{star_rating : star_rating, description : description, date : date, user_id : user_id, event_id : event_id}
    const [text, setText] = useState("");
    const handleNameChange = (event) => {
        setState({ comment: event.target.value })
        console.log(state)
    }
    const handleEmailChange = (event) => {
        setEmailState({ email: event.target.value })
        console.log(emailstate)
    }
    const handleStarChange = (event) => {
        setStarState({ star: event.target.value })
        console.log(starstate)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookObj = { ...state, ...emailstate }
        const emailCheck = await checkEmail(bookObj.email) //wait here for response
        console.log(emailCheck)
        if (emailCheck.length !== 0) {
            console.log(emailCheck[0].user_id, props.event_id)
            const reviewCheck = await checkReview(emailCheck[0].user_id, props.event_id)
            //FETCH REVIEW IF LEN !==0 ->   //here for duplicate sign up check                 
            console.log(reviewCheck)
            if (reviewCheck === true) {
                const errorString = "You've already reviewed this event"
                console.log(errorString)
                alert(errorString)

            } else {
                console.log(starstate.star, state.comment, today, emailCheck[0].user_id, props.event_id)
                await postReview(starstate.star, state.comment, today, emailCheck[0].user_id, props.event_id) //star_rating, description, date, user_id, event_id
                console.log("after postReview func")
                const successString = `Thank you for reviewing ${props.artist_name} at the ${props.venue_name} !`
                console.log(successString)
                alert(successString)
            }

        } else {
            const errorString = 'Account Email does not exist'
            console.log(errorString)
            alert(errorString)
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
                            <div className="rate">
                                <input type="radio" id="star5" name={state.star} onClick={handleStarChange} value="5" />
                                <label for="star5" title="text">5 stars</label>
                                <input type="radio" id="star4" name={state.star} onClick={handleStarChange} value="4" />
                                <label for="star4" title="text">4 stars</label>
                                <input type="radio" id="star3" name={state.star} onClick={handleStarChange} value="3" />
                                <label for="star3" title="text">3 stars</label>
                                <input type="radio" id="star2" name={state.star} onClick={handleStarChange} value="2" />
                                <label for="star2" title="text">2 stars</label>
                                <input type="radio" id="star1" name={state.star} onClick={handleStarChange} value="1" />
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
