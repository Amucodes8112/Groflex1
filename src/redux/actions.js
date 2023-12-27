export const addToCart = (item) => ({
    type: 'ADD_TO_CART',
    payload: item,
  });
  
  export const updateQuantity = (id, quantity) => ({
    type: 'UPDATE_QUANTITY',
    payload: { id, quantity },
  });
  