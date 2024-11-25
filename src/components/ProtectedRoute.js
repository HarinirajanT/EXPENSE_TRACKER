import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('authToken'); // Check authentication status (using localStorage for example)
  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
