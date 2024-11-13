// components/Signin.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = () => {
    const savedUser = JSON.parse(localStorage.getItem('userCredentials'));
    if (savedUser && savedUser.username === username && savedUser.password === password) {
      navigate('/home');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div className="signin-form">
      <h2>Welcome to LOREM</h2>
      <h3>Sign in</h3>
      <input
        type="text"
        placeholder="Username or email address"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignIn}>Sign in</button>
      <p>No Account? <Link to="/register">Sign up</Link></p>
      <p><a href="#">Forgot Password?</a></p>
    </div>
  );
}

export default Signin;
