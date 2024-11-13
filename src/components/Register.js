// src/components/Register.js

import React from 'react';
import '../App.css';

function Register() {
  return (
    <div className="register-content">
      <h2 className="register-heading">Create an Account</h2>
      <p className="register-subtext">Join us today and enjoy exclusive benefits.</p>
      <form className="register-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit" className="register-button">Sign Up</button>
      </form>
      <p className="redirect-text">
        Already have an account? <a href="/signin" className="signin-link">Sign In</a>
      </p>
    </div>
  );
}

export default Register;
