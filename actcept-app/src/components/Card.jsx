import React from 'react';

// import useState from 'react;'
import { Link } from 'react-router-dom';

function Card(props) {

    return (
        <div className="card">
            <img className="card-img-top" src={props.img} alt="Card cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <p className="card-text"><small className="text-muted">{props.date}</small></p>
                <Link
                    to='/event-description'
                    state={props.id}>
                    <button className='btn'> See more</button>
                </Link>
            </div>
        </div>
    );
}

export default Card;