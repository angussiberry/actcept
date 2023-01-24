import React from 'react';
import Card from './Card';

function EventList() {
    const cards =
        <>
        <Card
            title="Hello"
            img="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_960_720.jpg"
            desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            date="10/12/2023" />
        <Card
            title="this"
            img="https://cdn.pixabay.com/photo/2017/01/04/15/59/feather-1952382_960_720.jpg"
            desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            date="10/12/2023" />
        <Card
            title="is"
            img="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg"
            desc="This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
            date="10/12/2023" />
        </>

    return (
        <div>
            <div className="card-deck">
                {cards}
            </div>
        </div>
    );
}

export default EventList;