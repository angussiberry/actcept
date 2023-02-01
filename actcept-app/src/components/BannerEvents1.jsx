import '../App.css';
import React, { useState, useEffect } from 'react';

function BannerEvents1(props) {
  const [query, setQuery] = useState('')
  // useEffect(() => {
  //   props.onUpdate(query)
  // }, [query])
  const handleInput = event => {
    event.preventDefault();
    // console.log('e target val', event.target.value);
    setQuery(event.target.value);
    // console.log('Query', query);

  }
  return (
    <div className="BannerEvents1">
      <div>
        <h4 className="banner-events-header" >Welcome! Please enter your email.</h4>
      </div>
      <div className='email-container'>
        <span>Email:</span>
        <br />
        <input
          type="email"
          className="search-event-email"
          placeholder='Type your email here'
          id="email-search"
          onChange={handleInput}
        />
      </div>
      <button className='email-button btn' onClick={() => props.onSubmit(query)}> Search </button>
    </div>
  );
}

export default BannerEvents1;
