import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const toggle = useSelector((state) => state.counterShow);

  console.log('toggle', toggle);
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(10)); //{type : 유니크 식별자, payload: 10}
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };
  return (
    <>
      <h1>Redux Counter</h1>
      {toggle && <div>{counter}</div>}

      <button onClick={incrementHandler}>increment</button>
      <button onClick={increaseHandler}>increase by 5</button>
      <button onClick={decrementHandler}>decrement</button>

      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </>
  );
};

export default Counter;
