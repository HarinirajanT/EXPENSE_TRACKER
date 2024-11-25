// Function to calculate the balance (income - expense)
export const calculateBalance = (transactions) => {
    let income = 0;
    let expense = 0;
  
    transactions.forEach(transaction => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      } else {
        expense += transaction.amount;
      }
    });
  
    return income + expense; // Return the net balance
  };
  
  // Function to calculate total income
  export const calculateIncome = (transactions) => {
    let income = 0;
    transactions.forEach(transaction => {
      if (transaction.amount > 0) {
        income += transaction.amount;
      }
    });
    return income; // Return the total income
  };
  
  // Function to calculate total expense
  export const calculateExpense = (transactions) => {
    let expense = 0;
    transactions.forEach(transaction => {
      if (transaction.amount < 0) {
        expense += transaction.amount;
      }
    });
    return expense; // Return the total expense (as a negative value)
  };
  