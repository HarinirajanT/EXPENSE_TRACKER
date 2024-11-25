// seed.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/expense-tracker', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Define a schema and model for expenses
const expenseSchema = new mongoose.Schema({
  category: String,
  amount: Number
});

const Expense = mongoose.model('Expense', expenseSchema);

// Seed data
const expenses = [
  { category: 'Food', amount: 200 },
  { category: 'Transport', amount: 100 },
  { category: 'Entertainment', amount: 150 },
  { category: 'Utilities', amount: 80 },
  { category: 'Shopping', amount: 120 }
];

// Insert data
Expense.insertMany(expenses).then(() => {
  console.log('Data inserted');
  mongoose.connection.close();
}).catch((error) => {
  console.error('Error inserting data:', error);
  mongoose.connection.close();
});
