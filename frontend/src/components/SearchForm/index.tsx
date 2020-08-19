import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import _debounce from 'lodash/debounce';

import { fetchUsers } from 'actions/user.actions';
import searchIcon from 'assets/search-icon.svg';
import clearIcon from 'assets/clear-icon.svg';
import './SearchForm.scss';

interface SearchFormProps {
  fetchUsers: Function;
}

const SearchForm = (props: SearchFormProps): JSX.Element => {
  const [query, setQuery] = useState('');
  const [searchType, setSearchType] = useState('users');

  const search = useCallback(
    _debounce(() => props.fetchUsers({ query, type: searchType }), 500),
    [query, searchType]
  );

  useEffect(() => {
    if (query.length < 3) return;
    search();
    return search.cancel;
  }, [query, search, searchType]);

  return (
    <form className="form form--inline">
      <div className="form__input-field">
        <div className="form__input-search form__input-icon">
          <img src={searchIcon} alt="search input field" />
        </div>
        <input
          type="text"
          className="form__input"
          placeholder="Start typing to search..."
          onChange={event => setQuery(event.target.value)}
        />
        <div className="form__input-clear form__input-icon">
          <img src={clearIcon} alt="clear input field icon" />
        </div>
      </div>

      <div className="form__input-field">
        <select
          className="form__select"
          defaultValue={searchType}
          onChange={e => setSearchType(e.target.value)}>
          <option value="users">Users</option>
          <option value="repositories">Repositories</option>
        </select>
      </div>
    </form>
  );
};

export default connect(null, { fetchUsers })(SearchForm);
