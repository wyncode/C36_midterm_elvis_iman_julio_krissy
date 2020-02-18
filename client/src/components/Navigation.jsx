import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

// const Navigation = () => {
//   return (
//     <div className="navigation">
//       <Link to="/">Home</Link>
//       <Link to="/about">About</Link>
//       <Link to="/solutions">Solutions</Link>
//     </div>
//   );
// };

const Navigation = () => {
  return (
    <div className="container center">
      <nav className="menu">
        <img src={logo} alt="logo" className="logo-img" />
        <div className="menu__right">
          <ul className="menu__list">
            <li className="menu__list-item">
              <Link to="/" className="menu__link">
                Home
              </Link>
            </li>
            <li className="menu__list-item">
              <Link to="/about" className="menu__link">
                About
              </Link>
            </li>

            <li className="menu__list-item">
              <Link to="/solutions" className="menu__link">
                Solutions
              </Link>
            </li>
          </ul>
          <form className="menu__search-form hide" method="POST">
            <input
              className="menu__search-input"
              placeholder="Type and hit enter"
            />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
