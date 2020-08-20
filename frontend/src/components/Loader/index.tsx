import React from 'react';
import './Loader.scss';

const Loader = (): JSX.Element => (
  <div className="Loader">
    <svg className="circular" viewBox="25 25 50 50">
      <circle
        className="path"
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="4"
        strokeMiterlimit="10"
      />
    </svg>
  </div>
);

export default Loader;
