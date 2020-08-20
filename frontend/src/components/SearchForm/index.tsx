import React, { useState, useEffect, useCallback, ChangeEvent } from 'react';
import { connect } from 'react-redux';
import _debounce from 'lodash/debounce';

import { fetchSearchResults, clearSearch, clearCurrentState } from 'actions/search.actions';
import searchIcon from 'assets/search-icon.svg';
import clearIcon from 'assets/clear-icon.svg';
import './SearchForm.scss';

interface SearchFormProps {
  fetchSearchResults: Function;
  clearSearch: Function;
  clearCurrentState: Function;
}

interface SearchFormState {
  query: string;
  entity: string;
}

const SearchForm = (props: SearchFormProps): JSX.Element => {
  const [searchTerm, setSearchTerm] = useState<SearchFormState>({ query: '', entity: 'users' });

  const githubSearch = useCallback(
    _debounce(() => props.fetchSearchResults(searchTerm), 500),
    [searchTerm]
  );

  useEffect(() => {
    if (searchTerm.query.length < 3) {
      props.clearCurrentState();
      return;
    }
    githubSearch();
    return githubSearch.cancel;
  }, [searchTerm.query, searchTerm.entity, githubSearch]);

  const onInputChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target;
    setSearchTerm({ ...searchTerm, [name]: value });
  };

  const onClearInput = (): void => {
    setSearchTerm({ ...searchTerm, query: '' });
    props.clearSearch();
  };

  return (
    <form className="form form--inline" onSubmit={e => e.preventDefault()}>
      <div className="form__input-field">
        <div className="form__input-search form__input-icon">
          <img src={searchIcon} alt="search input field" />
        </div>
        <input
          name="query"
          type="text"
          value={searchTerm.query}
          className="form__input"
          placeholder="Start typing to search..."
          onChange={onInputChange}
        />
        <div className="form__input-clear form__input-icon" onClick={onClearInput}>
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

export default connect(null, { fetchSearchResults, clearSearch, clearCurrentState })(SearchForm);
