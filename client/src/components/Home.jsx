import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import Searchbar from './Searchbar';

const Home = () => {
  return (
    <>
      <div className="home">
        <Dropdown />
      </div>
      <div className="about-footer">
        <p>© 2020 AirAware</p>
      </div>
    </>
  );
};

export default Home;
