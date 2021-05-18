import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';


import Navigation from './component/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';


function App() {
  return (
    <Router>
      <Navigation/>

      <Switch>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
