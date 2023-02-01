import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Signup from '../components/Signup';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';


function CreateAcc(props) {
    const location = useLocation();
    const state = location.state;
    return (
        <div>
            <Header />
            <div>
                <Signup name="Create Account" artist="Sign up now" />
            </div>
            <Footer />
        </div >
    );
}

export default CreateAcc;