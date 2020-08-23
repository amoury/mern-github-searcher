import React, { useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import _get from 'lodash/get';
import _debounce from 'lodash/debounce';

import { SearchQuery } from 'types/search.types';
import { handleSearchQueryChange, clearSearchQuery } from 'actions/search.actions';

import searchIcon from 'assets/search-icon.svg';
import clearIcon from 'assets/clear-icon.svg';
import './SearchForm.scss';

interface SearchFormProps {
  handleSearchQueryChange: Function;
  clearSearchQuery: Function;
}

const SearchForm = (props: SearchFormProps): JSX.Element => {
  const queryRef = useRef<HTMLInputElement>(null);
  const entityRef = useRef<HTMLSelectElement>(null);

  const updateQuery = useCallback(
    _debounce((query: SearchQuery) => props.handleSearchQueryChange(query), 300),
    []
  );

  const onInputChange = (): void => {
    const query = _get(queryRef, 'current.value');
    const entity = _get(entityRef, 'current.value');

    const searchQuery = { query, entity };
    updateQuery(searchQuery);
  };

  const onClearInput = () => {
    if (queryRef.current) {
      queryRef.current.value = '';
    }
    props.clearSearchQuery();
  };

  return (
    <form className="form form--inline" onSubmit={e => e.preventDefault()}>
      <div className="form__input-field">
        <div className="form__input-search form__input-icon">
          <img src={searchIcon} alt="search input field" />
        </div>
        <input
          ref={queryRef}
          name="query"
          type="text"
          className="form__input"
          placeholder="Start typing to search..."
          onChange={onInputChange}
        />
        <div className="form__input-clear form__input-icon" onClick={onClearInput}>
          <img src={clearIcon} alt="clear input field icon" />
        </div>
      </div>

      <div className="form__input-field">
        <select ref={entityRef} name="entity" className="form__select" onChange={onInputChange}>
          <option value="users">Users</option>
          <option value="repositories">Repositories</option>
        </select>
      </div>
    </form>
  );
};

export default connect(null, { handleSearchQueryChange, clearSearchQuery })(SearchForm);
