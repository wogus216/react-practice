import { legacy_createStore } from 'redux';

const counterReducer = (state = { counter: 0, name: '싼쵸' }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = legacy_createStore(counterReducer);

export default store;
