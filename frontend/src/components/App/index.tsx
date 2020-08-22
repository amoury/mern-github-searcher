import React from 'react';
import './App.scss';
import Header from 'components/Header';
import SearchForm from 'components/SearchForm';
import Results from 'components/Results';
import Card from 'components/Card';

const App = () => {
  return (
    <div className="App">
      <Header />
      <SearchForm />
      <Results />
      <Card />
    </div>
  );
};

export default App;
