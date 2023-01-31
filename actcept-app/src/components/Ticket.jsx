import React, { useState, useEffect } from 'react';
import postSignUp from '../utils/postSignup';
import { Link } from 'react-router-dom';
import checkEmail from '../utils/emailCheck';
import { useLocation } from 'react-router-dom';
import '../App.css';

function Ticket(props) {
    const location = useLocation();
    const states = location.state;
    const [state, setState] = useState({ name: "" });
    const [emailstate, setEmailState] = useState({ email: "" });
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");

    const handleNameChange = (event) => {
        setState({ name: event.target.value })
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
        if (emailCheck === true) {
            await postSignUp(bookObj.name, bookObj.email)
            const successString = 'Booked!'
            console.log(successString)
            setText(successString)

        } else {
            const errorString = 'Account Email does not exist'
            console.log(errorString)
            setText(errorString)
            setText2('No Account? Sign up here')
        }

    }
    return (
        <><div className='Login-component'>
            <div className='ticket-container'>
                <div className='ticket-left'>
                    <div>
                        <h3>{props.name}</h3>
                        <h1 className='emphasized'>{props.artist}</h1>
                        <h5>Venue: {props.venue}</h5>
                        <h5>Date: {props.date}</h5>
                    </div>
                    <div className='ticket-info'>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <h5 className='ticket-labels'>Your Name:</h5>
                                <input className='ticket-input' type="text" name={state.name} onChange={handleNameChange} id="" />
                            </div>
                            <div>
                                <h5 className='ticket-labels'>Your Email:</h5>
                                <input className='ticket-input' type="email" name={state.email} onChange={handleEmailChange} id="" />
                            </div>
                            <div>
                                <button type='submit' className='btn'>Book Now</button>
                            </div>
                            <h5>{text}</h5>
                        </form>

                    </div>
                    <Link to={"/sign-up"} state={states} className="link2">{text2}</Link>
                </div>
                <div className='ticket-right'>
                    <img className='ticket-img' src={props.img} alt="Card cap" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Ticket; 