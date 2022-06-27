import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cart-slice';
import uiSlice from './ui-slice';

const cartReducer = cartSlice.reducer;
const uiReducer = uiSlice.reducer;

const store = configureStore({
  reducer: { cart: cartReducer, ui: uiReducer },
});

export default store;
