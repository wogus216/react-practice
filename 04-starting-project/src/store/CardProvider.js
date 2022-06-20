import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updateItems = state.items.concat(action.item);

    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItem;
    let updatedItems;
    if (existingCartItem) {
      updatedItem = {
        ...existingCartItem,
        amout: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updateItems[existingCartItemIndex] = updatedItem;
    }

    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updateItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>;
};

export default CartProvider;
