const initialState = {
    items: [
      { id: 1, name: 'Item 1', quantity: 0 },
      { id: 2, name: 'Item 2', quantity: 0 },
      // Add more items as needed
    ],
    cartItems: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const newItem = action.payload;
        const existingItem = state.cartItems.find((item) => item.id === newItem.id);
  
        if (existingItem) {
          existingItem.quantity += 1;
          return { ...state, cartItems: [...state.cartItems] };
        } else {
          newItem.quantity = 1;
          return { ...state, cartItems: [...state.cartItems, newItem] };
        }
  
      case 'UPDATE_QUANTITY':
        const { id, quantity } = action.payload;
        const updatedCartItems = state.cartItems.map((item) =>
          item.id === id ? { ...item, quantity } : item
        );
        return { ...state, cartItems: updatedCartItems };
      
        case 'DELETE_ITEM':
            const itemIdToDelete = action.payload;
            const updatedItems = state.items.filter((item) => item.id !== itemIdToDelete);
            return { ...state, items: updatedItems };
            
      default:
        return state;
    }
  };
  
  export default reducer;
  