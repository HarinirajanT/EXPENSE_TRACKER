import React from 'react';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import '../App.css'; // Assuming styles are in App.css

// Register the necessary chart components
Chart.register(ArcElement, Tooltip, Legend);

// Sample data for expenses
const expenses = [
  { date: '2024-10-01', category: 'Food', description: 'Groceries', amount: 1500 },
  { date: '2024-10-02', category: 'Transport', description: 'Bus fare', amount: 200 },
  { date: '2024-10-03', category: 'Entertainment', description: 'Movie tickets', amount: 800 },
  { date: '2024-10-04', category: 'Utilities', description: 'Electricity bill', amount: 1200 },
  { date: '2024-10-05', category: 'Shopping', description: 'New shoes', amount: 3000 },
];

const Dashboard = () => {
  const categories = ['Food', 'Transport', 'Entertainment', 'Utilities', 'Shopping']; // Add more categories as necessary
  const amounts = categories.map(category =>
    expenses
      .filter(expense => expense.category === category)
      .reduce((acc, expense) => acc + expense.amount, 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses',
        data: amounts,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  // CSV download functionality
  const downloadCSV = () => {
    const csvContent =
      'data:text/csv;charset=utf-8,Date,Category,Description,Amount (₹)\n' +
      expenses.map(e => `${e.date},${e.category},${e.description},${e.amount}`).join('\n');

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'expenses.csv');
    document.body.appendChild(link);
    link.click();
  };

  // Table rendering function
  const renderExpenseTable = () => {
    return expenses.map((expense, index) => (
      <tr key={index}>
        <td>{expense.date}</td>
        <td>{expense.category}</td>
        <td>{expense.description}</td>
        <td>{expense.amount}</td>
      </tr>
    ));
  };

  return (
    <div className="dashboard-content">
      <h2>Dashboard Overview</h2>
      

      {/* Expense Pie Chart */}
      <div className="chart-container">
        <h3>Expense Distribution</h3>
        <Pie data={data} />
      </div>

      {/* Expense table */}
      <h3>Expense Details</h3>
      <table id="expenseTable">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Description</th>
            <th>Amount (₹)</th>
          </tr>
        </thead>
        <tbody>{renderExpenseTable()}</tbody>
      </table>

      {/* Download CSV button */}
      <button id="downloadCsvBtn" onClick={downloadCSV}>
        Download CSV
      </button>
    </div>
  );
};

export default Dashboard;
