import '../App.css';

function EventContent() {
    return (
        <div ClassName="other-contents">
            <div ClassName="buttons">
                <button type='button' className='btn'>Book Now</button>
                <button type='button' className='btn'>Add to Shortlist</button>
                <button type='button' className='btn'>Leave a Review</button>
            </div>
            <br />
            <div ClassName="reviews">
                <h3>Reviews</h3>
                <p>Be the first to leave a review!</p>
            </div>
        </div>
    )
}

export default EventContent;