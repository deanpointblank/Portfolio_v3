import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Container } from 'react-bootstrap';

import MenuContainer from './Containers/menu';
import BlogContainer from './Containers/blog';
import ContactContainer from './Containers/contact';
import HomeContainer from './Containers/home';
import NotFoundContainer from './Containers/notFound';
import ProjectsContainer from './Containers/projects';


import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <Container fluid>
        <MenuContainer />
        <Switch>
          <Route exact path='/' component={HomeContainer} />
          <Route exact path='/blog' component={BlogContainer} />
          <Route exact path='/blog/:blog' component={BlogContainer} />
          <Route exact path='/contact' component={ContactContainer} />
          <Route exact path='/projects' component={ProjectsContainer} />
          <Route exact path='/projects/:project' component={ProjectsContainer} />
          <Route component={NotFoundContainer} />
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
