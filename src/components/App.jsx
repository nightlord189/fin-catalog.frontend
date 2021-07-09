import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const App = () => {
    return (
        <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Депозиты</Link>
              </li>
              <li>
                <Link to="/about">О проекте</Link>
              </li>
            </ul>
          </nav>
          <div className="App">
            <h1>Test1</h1>
          </div> 
          <Switch>
            <Route path="/about">
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </div>
      </Router>
    );
}

export default App;