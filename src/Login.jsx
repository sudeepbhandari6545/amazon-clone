import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './Firebase';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = (e) => {
    e.preventDefault();
    // some fancy firebase login
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        // its sucussifuly create new user with email and password
      })
      .catch((error) => alert(error.message));

    // some fancy firebase register
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1000px-Amazon_logo.svg.png"
          alt="logo"
        />
      </Link>
      <div className="login_container">
        <h1>Login</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            onClick={signIn}
            className="login_signin_button"
          >
            sign-in
          </button>
        </form>
        <p>please read and agree terms and condition</p>
        <button onClick={register} className="login_register_button">
          Create Account
        </button>
      </div>
    </div>
  );
};

export default Login;
