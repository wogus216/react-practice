import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  items: [],
  totalQuantity: 0,
  cartTotalPrice: 0,
  changed: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },
    addItemToCart(state, action) {
      console.log('addAction', action);
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
      state.changed = true;
      if (!existingItem) {
        state.items.push({ id: newItem.id, price: newItem.price, quantity: 1, totalPrice: newItem.price, name: newItem.title });
        state.cartTotalPrice += newItem.price;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
        state.cartTotalPrice += existingItem.totalPrice;
      }
    },
    removeItemFromCart(state, action) {
      console.log('removeAction', action);
      const id = action.payload;
      const existionItem = state.items.find((item) => item.id === id);
      state.totalQuantity--;
      state.changed = true;
      if (existionItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
        state.cartTotalPrice -= existionItem.price;
      } else {
        existionItem.quantity--;
        existionItem.totalPrice -= existionItem.price;
        state.cartTotalPrice -= existionItem.totalPrice;
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;
