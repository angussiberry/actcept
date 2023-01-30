import '../App.css';
import { useState, useEffect } from 'react';

function Search(props) {
    const [query, setQuery] = useState('');

    useEffect(() => {
        props.handleSearch(query);
    }, [query])

    const handleInput = (event) => {
        event.preventDefault();
        console.log('e target val', event.target.value);
        setQuery(event.target.value);
        // console.log(`Query: ${query}`);
        // props.handleSearch(query);


    }
    return (
        <div className="Search">
            <div className='search-header'>
                <div className='search-container'>
                    <span>Search</span>
                    <input className='search-bar' name="search-event" id="" onChange={handleInput} />
                </div>
                <div className='sort-container'>
                    <span>Sort</span>
                    <label htmlFor="">
                        <select className='sort-bar' name="sort-event" id="">
                            <option value="">Date</option>
                            <option value="">Location</option>
                            <option value="">Name</option>
                        </select>
                    </label>
                </div>
            </div>
        </div>
    );
}

export default Search;
