import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import { useStateValue } from './StateProvider';
import Login from './Login';
import Home from './Home';
import { auth } from './Firebase';

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run when it's load
    auth.onAuthStateChanged((authuser) => {
      console.log('this is MYUSER', authuser);

      if (authuser) {
        // user just login
        dispatch({
          type: 'SET_USER',
          user: authuser,
        });
      } else {
        // user just logout
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);
  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/">
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
