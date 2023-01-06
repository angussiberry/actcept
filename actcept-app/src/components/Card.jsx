import React from 'react';
// import useState from 'react;'

function Card(props) {
    return (
        <div class="card">
            <img class="card-img-top" src={props.img} alt="Card cap" />
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">{props.desc}</p>
                <p class="card-text"><small class="text-muted">{props.date}</small></p>
                <button type='button' className='btn'>See more</button>
            </div>
        </div>
    );
}

export default Card;