import { createSlice } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, counterShow: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    // 어떤 액션을 하냐에따라 자동으로 메서드가 실행된다.
    //자동으로 기존상태를 안바꾸고 자동으로 새로운 객체를 생성해준다.
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      //action을 매개변수로 활용
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.counterShow = !state.counterShow;
    },
  },
});
//action를 보내는 것, dispatch 로 꺼내 메서드 사용
export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
