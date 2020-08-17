import React from 'react';
import logo from 'assets/logo.svg';
import './Header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Github logo" />
      </div>
      <div className="header__content">
        <h1>Github Searcher</h1>
        <span>Search users or repositories below</span>
      </div>
    </header>
  );
};

export default Header;
