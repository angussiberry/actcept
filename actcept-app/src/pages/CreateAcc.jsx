import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Signup from '../components/Signup';
import { useLocation } from 'react-router-dom';


function CreateAcc(props) {
    const location = useLocation();
    const state = location.state;
    return (
        <div>
            <Header />
            <div>
                <div className='link-to'>
                    <Link to='/event-description' state={state}>{`< Return to Event`}</Link>
                </div>
                <Signup name="Create Account" artist="Sign up now" />
            </div>
            
        </div >
    );
}

export default CreateAcc;