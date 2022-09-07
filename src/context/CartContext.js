import { useReducer } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const cartReducer = ( state,action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, quantity: action.payload };
    case "ADD_NAME":
      return { ...state,  firstNames: action.payload  };
    case "ADD_LNAME":
      return { ...state, lastNames: action.payload};
    case "ADD_SHIPP": return {  ...state, shippingPrices: action.payload };
    case "ADD_COUNTRY":
      return { ...state,  countrys: action.payload };
    case "ADD_CITY":
      return {  ...state,  citys: action.payload};
    case "ADD_ADDRESS":
      return { ...state, addresss: action.payload };
    case "ADD_EMAIL":
      return { ...state, emails: action.payload   };
    case "ADD_POSTALCODE":
return {  ...state,  postalCodes: action.payload    };
    case "ADD_PHONENUMBER":
      return {
        ...state,  phonenumbers: action.payload };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    quantity: null,
    shippingPrices: 0,
    firstNames: null,
    lastNames: null,
    citys: "",
    countrys: "",
    emails: "",
    addresss: "",
    postalCodes: "",
    phonenumbers: ""
  });

  return (
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
