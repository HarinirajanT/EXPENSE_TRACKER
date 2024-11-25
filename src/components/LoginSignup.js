import React, { useState } from 'react';
import axios from 'axios'; // Import axios for API requests
import './LoginSignup.css'; // Add this CSS file for styling

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email,
      password,
      ...(name && { name }), // Include name only if it's not empty
    };

    try {
      let response;
      if (isLogin) {
        // Make a login request
        response = await axios.post('http://localhost:5000/login', formData);
      } else {
        // Make a signup request
        response = await axios.post('http://localhost:5000/signup', formData);
      }

      // Check if the response has data and handle accordingly
      if (response && response.data) {
        console.log(response.data); // Handle the response data
      } else {
        console.log('No data received');
      }
    } catch (error) {
      console.error('Error during the request:', error);
    }
  };

  return (
    <div className="login-signup-container">
      <div className="glass-effect">
        <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-btn">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>
        <p onClick={toggleMode} className="toggle-mode">
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
};

export default LoginSignup;
