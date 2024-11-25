// src/components/PieChartComponent.js
import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

const PieChartComponent = () => {
  const [expenseData, setExpenseData] = useState([]);

  // Fetch data from your backend API
  useEffect(() => {
    axios.get('http://localhost:5000/api/expenses')
      .then((response) => {
        setExpenseData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Prepare the data for the pie chart
  const pieData = {
    labels: expenseData.map(expense => expense.category),
    datasets: [
      {
        label: 'Expense Distribution',
        data: expenseData.map(expense => expense.amount),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'
        ]
      }
    ]
  };

  return (
    <div className="chart-container">
      <Pie data={pieData} />
    </div>
  );
};

export default PieChartComponent;
