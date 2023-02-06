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
    const valstar = 4 //should be props.stars
    let stars = ''
    const numstars = `${valstar}/5 Stars`
    const astar = '★ '
    for (let i = 0; i < valstar; i++) {
        stars = stars + astar
    }
    return (
        <>
            <div className='review-card'>
                <div className='ticket-info'>
                    <div>
                        <div class="rate">
                            <p className='star'>{stars}</p><p>{numstars}</p>
                        </div>
                        <h5 className='rev-email'>{props.email}email@email.com</h5>
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
