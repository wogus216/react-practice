import React from 'react';
import './ExpenseDate.css';

export default function ExpenseDate(props) {
  console.log('props', props);
  let changeDate = new Date(props.date);
  console.log('changeDate', changeDate);
  const month = changeDate.toLocaleString('en-us', { month: 'long' });
  const day = changeDate.toLocaleString('en-us', { day: '2-digit' });
  const year = changeDate.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}
