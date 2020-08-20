import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import _debounce from 'lodash/debounce';

import { fetchSearchResults } from 'actions/search.actions';
import searchIcon from 'assets/search-icon.svg';
import clearIcon from 'assets/clear-icon.svg';
import './SearchForm.scss';

interface SearchFormProps {
  fetchSearchResults: Function;
}

interface SearchFormState {
  query: string;
  entity: string;
}

const SearchForm = (props: SearchFormProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<SearchFormState>({ query: '', entity: 'users' });

  useEffect(() => {
    if (searchTerm.query.length < 3) return; // When the text in the input is less than 3, clear the store results.
    githubSearch();
    return githubSearch.cancel;
  }, [searchTerm.query, searchTerm.entity]);

  // useEffect(() => {
  //   if (query.length < 3) return;
  //   search();
  //   return search.cancel;
  // }, [query, search, searchType]);

  const githubSearch = useCallback(
    _debounce(() => props.fetchSearchResults(searchTerm), 500),
    [searchTerm]
  );

  const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;
    setSearchTerm({ ...searchTerm, [name]: value });
  };

  return (
    <form className="form form--inline">
      <div className="form__input-field">
        <div className="form__input-search form__input-icon">
          <img src={searchIcon} alt="search input field" />
        </div>
        <input
          name="query"
          type="text"
          className="form__input"
          placeholder="Start typing to search..."
          onChange={onInputChange}
        />
        <div className="form__input-clear form__input-icon">
          <img src={clearIcon} alt="clear input field icon" />
        </div>
      </div>

      <div className="form__input-field">
        <select
          name="entity"
          className="form__select"
          defaultValue={searchTerm.entity}
          onChange={onInputChange}>
          <option value="users">Users</option>
          <option value="repositories">Repositories</option>
        </select>
      </div>
    </form>
  );
};

export default connect(null, { fetchSearchResults })(SearchForm);
