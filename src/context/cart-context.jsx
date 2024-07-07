import React from 'react';

const CartContext = React.createContext({
  items: [],
  totalquantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  order: () => {},
});

export default CartContext;
