// Search.jsx
import React, { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import SearchImage from './images/11000.png'
import "./search.css";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (data) => {
    try {
      // Make API request to search for students
      // You need to replace the API endpoint with your actual endpoint
      const response = await fetch(`http://localhost:5000/users/search?college=${data.college}&branch=${data.major}`);
      const searchData = await response.json();
      setSearchResults(searchData);
    } catch (error) {
        console.log(error);
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <div className="up">
          <div className="home-main-text">
              <h1>College Search</h1>
          </div>
          <div className="image-container">
              <img src={SearchImage} className="home_img" alt="" />
          </div>
      </div>
      <div>
      </div>
      <SearchForm onSearch={handleSearch} />
      <SearchResult students={searchResults} />
    </div>
  );
};

export default Search;
