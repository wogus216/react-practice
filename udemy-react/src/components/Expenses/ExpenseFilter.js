import React, { useState } from 'react';
import Card from '../UI/Card';

const ExpenseFilter = (props) => {
  const [state, setState] = useState('');
  const onClick = (e) => {
    return props.onEnteredFilter(e.target.value);
  };

  return (
    <Card className="expense-item">
      <select onClick={onClick}>
        <option>2021</option>
        <option>2020</option>
        <option>2019</option>
      </select>
    </Card>
  );
};

export default ExpenseFilter;
