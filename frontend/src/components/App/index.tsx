import React from 'react';
import './App.scss';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import Results from 'components/Results';
import Notifications from 'components/Notifications';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Results />
      <Notifications />
    </div>
  );
};

export default App;
