import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ExpenseTracker from './components/ExpenseTracker';
import Reports from './components/Reports';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import Settings from './components/Settings';
import Calculator from './components/Calculator';
import LoginSignup from './components/LoginSignup';
import ProtectedRoute from './components/ProtectedRoute'; // Add ProtectedRoute component

import './App.css';

const App = () => {
  return (
    <Router>
      <header>
        <div className="navbar">
          <h1>Expense Tracker</h1>
          <nav>
            <Link to="/">Login</Link>
            <Link to="/tracker">Tracker</Link>
            <Link to="/reports">Reports</Link>
            <Link to="/features">Features</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/settings">Settings</Link>
            <Link to="/calculator">Calculator</Link>
          </nav>
        </div>
      </header>

      <div className="content">
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<LoginSignup />} />
          <Route path="/tracker" element={<ExpenseTracker />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/features" element={<Features />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/calculator" element={<Calculator />} />

          {/* Protected route */}
          <Route path="/dashboard" element={<Dashboard /> }/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
