import React from 'react';
import PropTypes from 'prop-types';
import '../css/SearchBar.css'

function SearchBar(props) {

  let _searchQuery = null;

  function handleSearchSubmission(event) {
    event.preventDefault();
    if (_searchQuery.value) {
      props.onSearchSubmission(`${_searchQuery.value}`);
    }
  }

  return (
    <div className="filters">
      <div className="input-group">
        <input
          placeholder="Search by Name"
          className="form-control"
          type="text"
          ref={(input) => {_searchQuery = input;}}
        />
        <button className="btn btn-info" type="submit" onClick={handleSearchSubmission}>Search</button>
      </div>
    </div>
  );

}

SearchBar.propTypes = {
  onSearchSubmission: PropTypes.func.isRequired
};

export default SearchBar;
