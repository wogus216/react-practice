import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
      console.log('로그인');
    },
    logout(state) {
      state.isAuthenticated = false;
      console.log('로그아웃');
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
