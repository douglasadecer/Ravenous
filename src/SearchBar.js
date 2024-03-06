import React from 'react';
import CookingImage from 'public/cooking.png'

function SearchBar() {
    const background = (<img id='backgroundimg' src={CookingImage} alt='utensils & ingredients on table'  />);
    return (
        <div id='search-container'>
          <h1>ravenous</h1>
          {background}
          <form id='search' action='search' method='get'>
            <input type='text' name='businessquery' placeholder='Search Business' />
            <input type='text' name ='locationquery' placeholder='Where?' />
            <button type='submit'>Search</button>  
          </form>
        </div>
        )
}

export default SearchBar;