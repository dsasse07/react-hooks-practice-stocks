import React from "react";

function SearchBar({ searchData, onSearchChange }) {

  const {sort, filter} = searchData

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sort==="Alphabetically"}
          onChange={onSearchChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sort==="Price"}
          onChange={onSearchChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select name="filter" onChange={onSearchChange} value={filter}>
          <option name="Tech" value="Tech">Tech</option>
          <option name="Sportswear" value="Sportswear">Sportswear</option>
          <option name="Finance" value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
