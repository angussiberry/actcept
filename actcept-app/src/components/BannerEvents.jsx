import '../App.css';

function BannerEvents() {
  return (
    <div className="BannerEvents">
      <div>
        <h4 className="banner-events-header" >Welcome! Please enter your email.</h4>
      </div>
      <div className='email-container'>
            <span>Email:</span>
            <br/>
            <input 
                type="email" 
                className="search-event-email" 
                placeholder='Type your email here' 
                id="email-search" 
            />
      </div>
      <button className='email-button'> Search </button>
    </div>
  );
}

export default BannerEvents;
