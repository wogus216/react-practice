import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    addItemToCart(state, action) {
      console.log('addAction', action);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state, action) {
      console.log('removeAction', action);
      const id = action.payload;
      const existionItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      if (existionItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existionItem.quantity--;
        existionItem.totalPrice = existionItem.totalPrice - existionItem.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
