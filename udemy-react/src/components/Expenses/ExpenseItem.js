import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

export default function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  console.log('ExpenseItem evaluated by React');
  const clickHandler = () => {
    setTitle('Updated!');
    console.log(title);
  };
  return (
    //jsx구문 결국 JS이다.
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}
