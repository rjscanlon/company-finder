import React from 'react';
import PropTypes from 'prop-types';

import './SearchBar.css';

const SearchBar = ({ handleChange }) => {
  	return <div className="search-bar">
  				<label 
  					className="search-bar-label" 
  					htmlFor="search-input"
  				>
  					Search by company name or ABN
  				</label>
  				<input
  					id="search-input"
		            type="text"
		            defaultValue=""
		            placeholder="Enter a company name or ABN"
		            onChange={ (e)=> {
		            	handleChange(e.target.value);
		            }}
		            className="search-bar-input"
		         />
	        </div>;
};

SearchBar.propTypes = {
  handleChange: PropTypes.func
}

export default SearchBar;