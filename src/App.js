import React from 'react';
import './styling/main.scss';
import './App.scss';

const API_KEY = 'GIPHY_API_KEY';

const App = () => {

  return (
    <div className="root-container">
      <div className="inner-container">
        <button className="button">GET RANDOM GIF</button>
        <img alt="gif" />
      </div>
    </div>
  );
}

export default App;
