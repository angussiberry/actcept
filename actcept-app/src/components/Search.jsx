import '../App.css';

function Search() {
    return (
        <div className="Search">
            <div className='search-header'>
                <div className='search-container'>
                    <span>Search</span>
                    <input type="search" name="search-event" id="" />
                </div>
                <div className='sort-container'>
                    <span>Sort</span>
                    <label htmlFor="">
                        <select name="sort-event" id="">
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
