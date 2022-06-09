import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const dropdownChange = (e) => {
    props.onEnteredFilter(e.target.value);
  };

  return (
    <div className="expense-filter">
      <div className="expense-filter_control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChange}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
