import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cartAmount: 0,
  cartDetail: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addCart(state) {
      state.cartAmount++;
    },
    decreament(state) {
      state.cartAmount--;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
