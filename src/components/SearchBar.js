import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" 
                value="Alphabetically" 
                checked={props.sortBy === "name" ? true : false} 
                onChange={() => props.updateSortBy("name")}/>
        Alphabetically
      </label>
      <label>
        <input  type="radio" 
                value="Price" 
                checked={props.sortBy === "price" ? true : false} 
                onChange={() => props.updateSortBy("price")}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={event => props.updateFilter(event)}>
          <option value="All">All Stocks</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
