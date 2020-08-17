import React, { useState } from 'react';
import searchIcon from 'assets/search-icon.svg';
import clearIcon from 'assets/clear-icon.svg';
import './SearchForm.scss';

const SearchForm = (): JSX.Element => {
  return (
    <form className="form form--inline">
      <div className="form__field-group">
        <div className="form__input-field">
          <div className="form__input-search form__input-icon">
            <img src={searchIcon} alt="search input field" />
          </div>
          <input type="text" className="form__input" placeholder="Start typing to search..." />
          <div className="form__input-clear form__input-icon">
            <img src={clearIcon} alt="clear input field icon" />
          </div>
        </div>
      </div>

      <div className="form__field-group"></div>
    </form>
  );
};

export default SearchForm;
