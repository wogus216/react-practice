import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import '../Expenses/Expenses.css';

export default function Expense(props) {
  return (
    <Card className="expenses">
      {props.items.map((data, i) => {
        return <ExpenseItem title={data.title} amount={data.amount} date={data.date} />;
      })}
    </Card>
  );
}
