import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const cartReducer = (action, state) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, quantity: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, {
    quantity: null,
  });
  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
