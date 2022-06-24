import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart';

const cartReducer = cartSlice.reducer;

const store = configureStore({
  reducer: { cart: cartReducer },
});

export default store;
