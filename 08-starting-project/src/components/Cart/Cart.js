import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartTotalPrice = useSelector((state) => state.cart.cartTotalPrice);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem key={item.id} item={{ title: item.name, id: item.id, quantity: item.quantity, total: item.totalPrice, price: item.price }} />
        ))}
      </ul>
      {cartTotalPrice > 0 && (
        <>
          <h2>Total Price</h2>
          <div> ${cartTotalPrice.toFixed(2)}</div>
        </>
      )}
    </Card>
  );
};

export default Cart;
