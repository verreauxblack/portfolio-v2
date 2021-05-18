import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './styles/main.css';



import Navigation from './component/Navigation';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Error404 from './pages/Error404';
import Footer from './component/Footer';


function App() {

  return (
    <Router>
      <Navigation/>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="*">
          <Error404/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
