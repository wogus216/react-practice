import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const name = useSelector((state) => state.name);
  console.log('싼쵸확인', name);
  const toggleCounterHandler = () => {};
  return (
    <>
      <h1>Redux Counter</h1>
      <div>{counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </>
  );
};

export default Counter;
