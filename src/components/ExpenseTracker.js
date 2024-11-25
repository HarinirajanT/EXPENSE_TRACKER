import React, { useState, useEffect } from 'react';
import { calculateBalance, calculateIncome, calculateExpense } from '../scripts/typescript.js'; 
import '../App.css';

const ExpenseTracker = () => {
const [transactions, setTransactions] = useState([]);
const [text, setText] = useState('');
const [amount, setAmount] = useState('');
const [category, setCategory] = useState('food');
const [frequency, setFrequency] = useState('weekly');
  const [threshold, setThreshold] = useState('');

  // UseEffect to manage localStorage transactions
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions'));
    if (storedTransactions) {
      setTransactions(storedTransactions);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const balance = calculateBalance(transactions);
  const income = calculateIncome(transactions);
  const expense = calculateExpense(transactions);

  // Add a new transaction
  const addTransaction = (e) => {
    e.preventDefault();
    const newTransaction = { text, amount: parseFloat(amount), category, frequency, threshold };
    setTransactions([...transactions, newTransaction]);
    setText('');
    setAmount('');
    setCategory('food');
    setFrequency('weekly');
    setThreshold('');
  };

  return (
    <div className="expense-tracker">
      <h2>Your Balance</h2>
      <h1 id="balance">&#8377;{balance}</h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p id="money-plus" className="money-plus">+&#8377;{income}</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p id="money-minus" className="money-minus">-&#8377;{expense}</p>
        </div>
      </div>

      <h3>History</h3>
      <ul id="list" className="list">
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.text} - &#8377;{transaction.amount} ({transaction.category})
          </li>
        ))}
      </ul>

      <h3>Add New Transaction</h3>
      <form id="form" onSubmit={addTransaction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter expense/income name"
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount"
          />
        </div>

        <div className="form-control">
          <label htmlFor="category">Category</label>
          <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="utilities">Utilities</option>
            <option value="entertainment">Entertainment</option>
            <option value="others">Others</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="frequency">Frequency</label>
          <select id="frequency" value={frequency} onChange={(e) => setFrequency(e.target.value)}>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="threshold">Set Expense Threshold (&#8377;)</label>
          <input
            type="number"
            id="threshold"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
            placeholder="Set your limit"
          />
        </div>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default ExpenseTracker;
