import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpesneForm = () => {
  const [state, setState] = useState({
    title: '',
    amount: '',
    day: '',
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    //바로 최신 상태 보장함 엄청 중요!!
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log('state', state);
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" onChange={changeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input name="amount" type="text" min="0.01" step="0.01" onChange={changeHandler} />
          <input name="day" type="date" min="2019-01-01" max="2022-12-31" onChange={changeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpesneForm;
