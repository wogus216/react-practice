import React from 'react';
import './ExpenseForm.css';
const ExpesneFormButton = (props) => {
  return (
    <div className="new-expense-button__actions">
      <button onClick={props.onStart}>Add Expense</button>
    </div>
  );
};
export default ExpesneFormButton;
