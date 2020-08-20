import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import Results from 'components/Results';

import { User } from 'types/user.types';
import { Repo } from 'types/repo.types';
import { StoreState } from 'reducers';

interface AppProps {
  users: User[];
  repos: Repo[];
}

const App = (props: Partial<AppProps>) => {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Results />
    </div>
  );
};

const mapStateToProps = ({ users }: StoreState): { users: User[] } => ({ users });

export default connect(mapStateToProps)(App);
