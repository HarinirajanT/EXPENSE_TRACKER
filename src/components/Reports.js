const expenses = [
  { date: '2024-10-01', category: 'Food', description: 'Groceries', amount: 1500 },
  { date: '2024-10-02', category: 'Transport', description: 'Bus fare', amount: 200 },
  { date: '2024-10-03', category: 'Entertainment', description: 'Movie tickets', amount: 800 },
  { date: '2024-10-04', category: 'Utilities', description: 'Electricity bill', amount: 1200 },
  { date: '2024-10-05', category: 'Shopping', description: 'New shoes', amount: 3000 },
];

const Reports = () => {
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
    <div className="reports-container">
      <div className="reports-content">
        <h2 className="reports-title">Expense Reports</h2>

        <h3 className="table-title">Expense Details</h3>
        <table id="expenseTable" className="expense-table">
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

        <button id="downloadCsvBtn" className="download-btn" onClick={downloadCSV}>
          Download CSV
        </button>
      </div>
    </div>
  );
};

export default Reports;