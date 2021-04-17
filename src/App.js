import React from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            {/* HEADER */}
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
            {/* HEADER */}
            <Header />
            {/* HOME */}
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
