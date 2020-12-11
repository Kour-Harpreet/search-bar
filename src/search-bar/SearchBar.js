import React from "react";
import "./SearchBar.css";
import "./SearchBar_reset.css";

class SearchBar extends React.Component {

  render() {
    return (
      <div className="searchBar">
        <label htmlFor="search">Search here:</label>
        <input
          name="search"
          type="text"
          placeholder="Enter here to search..."
      
        />
      </div>
    );
  }
}


export default SearchBar;