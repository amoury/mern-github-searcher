import React from 'react';
import './App.scss';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import Results from 'components/Results';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Results />
    </div>
  );
};

export default App;
