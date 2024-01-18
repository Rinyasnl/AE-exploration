// Login.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const navigate = useNavigate();

  const login = async () => {
    // Simulate authentication process (replace with actual authentication logic)
    const isAuthenticated = true;

    if (isAuthenticated) {
      // Navigate to the protected page upon successful login
      navigate('/protected');
    } else {
      // Handle authentication failure (show error message, etc.)
      console.error('Authentication failed');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" required />
        <br />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <br />
        <button type="button" onClick={login} className="login-button">
          Login with Okta
        </button>
      </form>
    </div>
  );
};

export default Login;
