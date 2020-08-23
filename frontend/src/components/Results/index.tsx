import React from 'react';
import { connect } from 'react-redux';
import { StoreState } from 'reducers';
import cx from 'classnames';

import Card from 'components/Card';
import Loader from 'components/Loader';

import './Results.scss';

import { Status } from 'types/status.types';
import { ResponseItem } from 'types/results.types';

interface ResultsProps {
  status: Status;
  searchResults: ResponseItem[];
}

const renderResultsData = (records: ResponseItem[]) => (
  <div className="Results--data">
    {records.map(record => (
      <Card key={record.id} data={record} />
    ))}
  </div>
);

const Results = ({ status, searchResults }: ResultsProps): JSX.Element => {
  const { isFetching } = status;

  const resultClasses = cx('Results', {
    'Results--halfheight': isFetching,
    'Results--fullheight': searchResults.length,
  });

  return (
    <div className={resultClasses}>
      {isFetching ? <Loader /> : renderResultsData(searchResults)}
    </div>
  );
};

const mapStateToProps = ({ status, searchResults }: StoreState) => {
  return {
    status,
    searchResults,
  };
};

export default connect(mapStateToProps)(Results);
