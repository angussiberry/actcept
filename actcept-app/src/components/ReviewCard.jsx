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
    const valstar = props.stars //should be props.stars
    let stars = ''
    const numstars = `${valstar}/5 Stars`
    const astar = '★ '
    const [user, setUser] = useState([]);
    for (let i = 0; i < valstar; i++) {
        stars = stars + astar
    }
    useEffect(() => {
        const fetchUser = async () => {
            try {
                console.log(props.user_id)
                const response = await fetch(`https://4o3xjugkz1.execute-api.eu-west-2.amazonaws.com/dev/users?user_id=${props.user_id}`);
                const data = await response.json();
                //const newData = data.filter(obj => obj.event_id === state)
                //[{"review_id":1,"star_rating":5,"description":"Coldplay were so good","date":"2023-01-29T00:00:00.000Z","user_id":1,"event_id":2}]
                setUser(data);
                console.log(user)
            } catch (error) {
                console.log(error);
            }
        };
        fetchUser();
    }, []);

    return (
        <>
            <div className='review-card'>
                <div className='ticket-info'>
                    <div>
                        <div className="rate">
                            <p className='star'>{stars}</p><p>{numstars}</p>
                        </div>
                        {user.length ?
                            <>
                                <h5 className='rev-email'>{user[0].name} ({user[0].email})</h5>
                            </> : null}

                    </div>
                    <div>
                        <h5>{props.review}</h5>
                    </div>
                </div>
            </div>

        </>
    );
}

export default ReviewCard;
