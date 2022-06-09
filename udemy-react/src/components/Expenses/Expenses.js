import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from '../Expenses/ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import '../Expenses/Expenses.css';

export default function Expense(props) {
  const [filterYear, setFilterYear] = useState('2020');
  const onEnteredFilter = (year) => {
    console.log('filterData', year);
    setFilterYear(year);
  };
  console.log('filterYear', filterYear);
  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onEnteredFilter={onEnteredFilter} />
        {props.items.map((data, i) => {
          return <ExpenseItem title={data.title} amount={data.amount} date={data.date} />;
        })}
      </Card>
    </>
  );
}
