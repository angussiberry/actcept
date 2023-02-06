import '../App.css';
import { Link } from 'react-router-dom';

function EventContent(props) {
    return (
        <div className="other-contents">
            <div className="buttons">
                <Link
                    to='/book-ticket'
                    state={props.id}>
                    <button type='button' className='btn'>Book Now</button>
                </Link>
            </div>
            <br />
            <div className="reviews">
                <h3>Reviews</h3>
                {/*<p>Be the first to leave a review!</p>*/}
            </div>
        </div>
    )
}

export default EventContent;