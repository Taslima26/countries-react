import React, {useState,useRef,useEffect} from 'react';
import './Search.css';
const Search = ({ searchVal, setSearchVal }) => {
    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    const handleChange = (event) => {
        setSearchVal(event.target.value);
        
    }

  return (
    <div>
      <form className='containter'>
              <input className='searchbox'
          type="search"
          id="mySearch"
          name="q"
                  placeholder="Search for a country"
                  value={searchVal}
                  onChange={handleChange}
                  ref={inputRef}
        />
       
      </form>
    </div>
  );
};

export default Search;
