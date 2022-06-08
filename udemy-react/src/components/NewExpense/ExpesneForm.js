import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpesneForm = (props) => {
  const [state, setState] = useState({
    title: '',
    amount: '',
    date: '',
  });
  const changeHandler = (event) => {
    const { name, value } = event.target;
    //바로 최신 상태 보장함 엄청 중요!!
    //setState({...state, [name]:value})
    setState((prevState) => {
      return { ...prevState, [name]: value };
    });
    console.log('state', state);
  };
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = state;
    props.onSaveExpenseData(expenseData);
    // console.log('expenseData', expenseData);
    setState({
      title: '',
      amount: '',
      date: '',
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input name="title" type="text" value={state.title} onChange={changeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input name="amount" value={state.amount} type="text" min="0.01" step="0.01" onChange={changeHandler} />
          <input name="date" value={state.date} type="date" min="2019-01-01" max="2022-12-31" onChange={changeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpesneForm;
