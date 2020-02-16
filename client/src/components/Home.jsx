import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import Searchbar from './Searchbar';

const Home = () => {
  return (
    <div className="home">
      {/* <Container>
        <h3>Check Your Air Quality Anywhere in the US </h3>
        <h4>
          {' '}
          <Dropdown />
        </h4>
      </Container> */}
      <Dropdown />
    </div>
  );
};

export default Home;
