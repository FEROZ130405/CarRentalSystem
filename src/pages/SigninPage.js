// pages/SigninPage.js
import React from 'react';
import Signin from '../components/Signin';
import Login from '../components/Login';

function SigninPage() {
  return (
    <div className="signin-page">
      <div className="signin-left">
        <h1>Your Logo</h1>
        <h2>Sign in to</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <Login />
      </div>
      <div className="signin-right">
        <Signin />
      </div>
    </div>
  );
}

export default SigninPage;
