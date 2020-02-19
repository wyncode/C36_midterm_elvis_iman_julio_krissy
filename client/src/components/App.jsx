import React from 'react';
import '../styling/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import Solutions from './Solutions';

//import Dropdown from './Dropdown';
// import Container from 'react-bootstrap/Container';
//import Router from 'react-bootstrap/Router';
//import Searchbar from './Searchbar';

import Home from './Home';
import Navigation from '../components/Navigation';

class App extends React.Component {
  state = { serverMessage: '' };

  componentDidMount() {}

  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/solutions" component={Solutions} />
        </Switch>
        <div className="about-footer">
          <p>© 2020 AirAware</p>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
