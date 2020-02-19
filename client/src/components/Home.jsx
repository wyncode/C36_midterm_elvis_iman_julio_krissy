import React from 'react';
import Dropdown from './Dropdown';

const Home = () => {
  return (
    <div className="home">
      <Dropdown />
      <div className="bottom-image">
        <div className="bottom-hero-text">
          <h5>Track your air quality anywhere in the US</h5>
          <h4>hello@airaware.com</h4>
          <h4>1-800-AIR-AWARE</h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
