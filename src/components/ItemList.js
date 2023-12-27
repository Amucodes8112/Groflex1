
import React from 'react';

const ItemList = ({ items, onAddToCart, onQuantityChange, onDeleteItem }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="item">
          <span>{item.name}</span>
          <input
            type="number"
            value={item.quantity}
            onChange={(e) => onQuantityChange(item.id, e.target.value)}
          />
          <button onClick={() => onAddToCart(item)}>Add to Cart</button>
          <button onClick={() => onDeleteItem(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
