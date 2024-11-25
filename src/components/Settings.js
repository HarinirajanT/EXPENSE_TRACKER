import React, { useState } from 'react';
import '../App.css'; // Assuming styles are in App.css

const Settings = () => {
  // Initialize state for form fields
  const [username, setUsername] = useState('JohnDoe');
  const [currency, setCurrency] = useState('USD');
  const [notifications, setNotifications] = useState(true);
  const [categories, setCategories] = useState('Food, Travel, Shopping');
  const [successMessage, setSuccessMessage] = useState(false);

  // Handle form submission
  const handleSaveSettings = () => {
    // Here you can integrate API call or save settings to local storage
    setSuccessMessage(true);  // Show success message after saving
    setTimeout(() => setSuccessMessage(false), 3000);  // Hide success message after 3 seconds
  };

  return (
    <div className="settings-content">
      <h2>Settings</h2>
      <p>Adjust your application settings here.</p>
      
      <h2>User Preferences</h2>
      <form id="settings-form">
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="currency">Preferred Currency:</label>
          <select
            id="currency"
            name="currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">$ USD</option>
            <option value="EUR">€ EUR</option>
            <option value="GBP">£ GBP</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="notifications">Enable Notifications:</label>
          <input
            type="checkbox"
            id="notifications"
            name="notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="categories">Manage Categories:</label>
          <input
            type="text"
            id="categories"
            name="categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
          />
        </div>

        <button type="button" className="btn" onClick={handleSaveSettings}>
          Save Settings
        </button>
      </form>

      {successMessage && (
        <p id="success-message">Settings saved successfully!</p>
      )}
    </div>
  );
};

export default Settings;
