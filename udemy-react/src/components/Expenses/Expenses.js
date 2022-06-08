import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';

import '../Expenses/Expenses.css';
import ExpenseFilter from './ExpenseFilter';

export default function Expense(props) {
  const onEnteredFilter = (data) => {
    console.log('filterData', data);
  };

  return (
    <>
      <ExpenseFilter onEnteredFilter={onEnteredFilter} />
      <Card className="expenses">
        {props.items.map((data, i) => {
          return <ExpenseItem title={data.title} amount={data.amount} date={data.date} />;
        })}
      </Card>
    </>
  );
}
