import React, { useState } from 'react';
import '../App.css'; // Assuming styles are in App.css

const Features = () => {
  // Sample historical expenses data
  const historicalExpenses = [
    { date: '2024-09-01', amount: 1500 },
    { date: '2024-09-02', amount: 2000 },
    { date: '2024-09-03', amount: 1800 },
    { date: '2024-09-04', amount: 2200 },
    { date: '2024-09-05', amount: 2500 },
  ];

  // State to store forecast and budget suggestion
  const [forecastAmount, setForecastAmount] = useState(0);
  const [budgetSuggestion, setBudgetSuggestion] = useState(0);

  // Function to calculate forecast and budget suggestion
  const calculateForecast = () => {
    const lastMonthExpenses = historicalExpenses.map(exp => exp.amount);
    const total = lastMonthExpenses.reduce((acc, curr) => acc + curr, 0);
    const averageExpense = total / lastMonthExpenses.length;

    // Simple forecast for next month based on average
    const forecast = averageExpense * 30; // Assuming 30 days in the next month

    // Suggesting a budget (e.g., 20% more than average)
    const suggestedBudget = averageExpense * 1.2;

    // Update state
    setForecastAmount(forecast);
    setBudgetSuggestion(suggestedBudget);
  };

  return (
    <div className="features-content">
      <h1>Expense Tracker - Features</h1>

      <h2>Expense Forecasting</h2>

      <div className="forecast-container">
        <h3>Forecast for Next Month:</h3>
        <p>₹{forecastAmount.toFixed(2)}</p>
      </div>

      <div className="budget-suggestion-container">
        <h3>Suggested Monthly Budget:</h3>
        <p>₹{budgetSuggestion.toFixed(2)}</p>
      </div>

      <button onClick={calculateForecast} className="btn">
        Calculate Forecast
      </button>
    </div>
  );
};

export default Features;
