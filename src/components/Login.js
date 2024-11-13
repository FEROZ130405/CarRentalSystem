// components/Login.js
import React from 'react';

function Login() {
  const recentUsers = [
    { name: 'John Peter', active: 'Active 1 day ago' },
    { name: 'Alina Shmen', active: 'Active 4 days ago' }
  ];

  return (
    <div className="login-options">
      <h3>Login as:</h3>
      <div className="users">
        {recentUsers.map((user, index) => (
          <div className="user" key={index}>
            <div className="user-image"></div>
            <div>
              <p>{user.name}</p>
              <span>{user.active}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Login;
