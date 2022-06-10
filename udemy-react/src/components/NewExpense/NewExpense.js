import React, { useState } from 'react';
import ExpesneForm from './ExpesneForm';
import ExpesneFormButton from './ExpesneFormButton';

import './NewExpense.css';

const NewExpense = (props) => {
  const [startInput, setStartInput] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = { ...enteredExpenseData, id: Math.random().toString() };
    console.log('expenseData', expenseData);
    props.onAddExpense(expenseData);
  };
  const handleStartSwitch = () => {
    setStartInput(true);
  };

  const handleStopSwitch = () => {
    setStartInput(false);
  };

  return (
    <div className="new-expense">
      {!startInput && <ExpesneFormButton onStart={handleStartSwitch} />}
      {startInput && <ExpesneForm onStop={handleStopSwitch} onSaveExpenseData={saveExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
