import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
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
        <h3>Login</h3>
        <form>
          <h5>Email</h5>
          <input type="text" />
          <h5>Password</h5>
          <input type="password" />
          <button>sign-in</button>
        </form>
        <p>please read and agree terms and condition</p>
        <button>Create Account</button>
      </div>
    </div>
  );
};

export default Login;