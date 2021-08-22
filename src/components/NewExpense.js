import React from 'react';
import NewExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({ expenses, setExpenses }) => {
  return (
    <div className="new-expense">
      <NewExpenseForm 
        expenses={expenses}
        setExpenses={setExpenses}
      />
    </div>
  )
}

export default NewExpense;