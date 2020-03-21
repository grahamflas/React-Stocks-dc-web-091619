import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" 
                value="Alphabetically" 
                checked={props.sortBy === "Alphabetically" ? true : false} 
                onChange={() => props.updateSort("Alphabetically")}/>
        Alphabetically
      </label>
      <label>
        <input  type="radio" 
                value="Price" 
                checked={props.sortBy === "Price" ? true : false} 
                onChange={() => props.updateSort("Price")}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
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
