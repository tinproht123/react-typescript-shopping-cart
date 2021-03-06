import React from 'react';
import CartItem from '../CartItem/CartItem';
//Styles
import { Wrapper } from './Cart.styles';
//Types
import { CartItemType as CartType } from '../../App';

type Props = {
  cartItems: CartType[];
  addToCart: (clickedItem: CartType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      ))}
    </Wrapper>
  );
};

export default Cart;
