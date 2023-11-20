import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const CartContext = createContext();

export function CartProvider({ children }) {

    const [items, setItems] = useState(0);

  return (
    <CartContext.Provider value={{items, setItems}}>
        {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.any
};