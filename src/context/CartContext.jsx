import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';


export const CartContext = createContext();

export function CartProvider({ children }) {

  const storedItems = JSON.parse(localStorage.getItem('cartItems'));
  const initialItems = storedItems ? storedItems : 0;

  const [items, setItems] = useState(initialItems);

  useEffect(() => {
    const parsedItems = JSON.stringify(items);
    localStorage.setItem('cartItems', parsedItems);
  }, [items]);

  return (
    <CartContext.Provider value={{items, setItems}}>
        {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.any
};