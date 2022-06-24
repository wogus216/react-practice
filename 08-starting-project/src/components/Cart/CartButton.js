import { useSelector } from 'react-redux';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const cartAmount = useSelector((state) => state.cart.cartAmount);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartAmount}</span>
    </button>
  );
};

export default CartButton;
