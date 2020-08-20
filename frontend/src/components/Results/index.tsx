import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'reducers';
import cx from 'classnames';
import _get from 'lodash/get';

import { User } from 'types/user.types';
import { Repo } from 'types/repo.types';
import { SearchQuery } from 'types/search.types';

import Card from 'components/Card';
import Loader from 'components/Loader';
import './Results.scss';

interface ResultsProps {
  users: User[];
  repos: Repo[];
  search: SearchQuery;
}

type Item = User | Repo;

const renderResultsData = (records: Item[]) => (
  <div className="Results--data">
    {records.map((record: User | Repo) => (
      <Card key={record.id} data={record} />
    ))}
  </div>
);

const Results = (props: ResultsProps): JSX.Element => {
  const { users, repos, search } = props;
  const records = _get(props, [search.entity]);
  const isFetching = _get(search, 'isFetching', false);

  const resultClasses = cx('Results', {
    'Results--halfheight': isFetching,
    'Results--fullheight': records.length,
  });

  return (
    <div className={resultClasses}>{isFetching ? <Loader /> : renderResultsData(records)}</div>
  );
};

const mapStateToProps = (state: StoreState) => {
  return {
    users: state.users,
    search: state.search,
    repos: state.repos,
  };
};

export default connect(mapStateToProps)(Results);
