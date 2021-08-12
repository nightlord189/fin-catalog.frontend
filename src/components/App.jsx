import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import AppNavbar from './AppNavbar.jsx';
import Deposits from './Deposits.jsx';
import About from './About.jsx';

const App = () => (
  <Router>
    <AppNavbar />
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/deposits">
        <Deposits />
      </Route>
      <Route path="/">
        <Redirect to="/deposits" />
      </Route>
    </Switch>
  </Router>
);

export default App;
