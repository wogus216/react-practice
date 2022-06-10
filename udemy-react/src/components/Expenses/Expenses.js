import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';

import '../Expenses/Expenses.css';
import ExpensesChart from './ExpensesChart';

export default function Expense(props) {
  const [filterYear, setFilterYear] = useState('2020');
  const onEnteredFilter = (year) => {
    console.log('filterData', year);
    setFilterYear(year);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onEnteredFilter={onEnteredFilter} />
        <ExpensesChart expense={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </>
  );
}
