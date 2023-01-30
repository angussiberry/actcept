import React, { useState, useEffect } from 'react';
import checkEmail from '../utils/emailCheck';
import { Link } from 'react-router-dom';
import postUser from '../utils/postUser';
import { useLocation } from 'react-router-dom';


function Signup(props) {
    const location = useLocation();
    const states = location.state;
    const [state, setState] = useState({ name: "" });
    const [emailstate, setEmailState] = useState({ email: "" });
    const [passwordstate, setPasswordState] = useState({ email: "" });
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
    const handlePasswordChange = (event) => {
        setPasswordState({ password: event.target.value })
        console.log(passwordstate)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const bookObj = { ...state, ...emailstate, ...passwordstate }
        const emailCheck = await checkEmail(bookObj.email) //wait here for response
        if (emailCheck === true) {
            const errorString = 'Account by this email already exists'
            console.log(errorString)
            setText(errorString)

        } else {
            await postUser(bookObj.name, bookObj.email, bookObj.email)
            const successString = 'Account Created: Welcome to Actcept!'
            console.log(successString)
            setText(successString)
            setText2('Return to Booking')
        }

    }
    return (
        <>
            <div className='ticket-container'>
                <div className='ticket-left'>
                    <div>
                        <h1>{props.name}</h1>
                        <h1>Artists: {props.artist}</h1>
                    </div>
                    <div className='ticket-info'>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <h4 className='ticket-labels'>Your Name:</h4>
                            <input className='ticket-input' type="text" name={state.name} onChange={handleNameChange} id="" />
                        </div>
                        <div>
                            <h4 className='ticket-labels'>Your Email:</h4>
                            <input className='ticket-input' type="email" name={state.email} onChange={handleEmailChange} id="" />
                        </div>
                        <div>
                            <h4 className='ticket-labels'>Your Password:</h4>
                            <input className='ticket-input' type="password" name={state.password} onChange={handlePasswordChange} id="" />
                        </div>
                        <div>
                        <input type="submit" value="Sign up" />
                        </div>
                        <p>{text}</p>
                    </form>
                    <Link to={"/book-ticket"} state={states} className="link">{text2}</Link>
                    </div>

                </div>
                <div className='ticket-right'>
                    <h1>Right side</h1>
                </div>
            </div>
        </>
    );
}

export default Signup;