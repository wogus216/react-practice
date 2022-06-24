import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './ counter';
import authReducer from './auth';

console.log('counterSlice', counterReducer);
//useSelector로 꺼내서 사용
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
