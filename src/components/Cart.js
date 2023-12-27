import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
