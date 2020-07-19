import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import MenuContainer from './Containers/menu';

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <MenuContainer />
        <div>
          <p>hello there!</p>
        </div>
        <Switch>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
