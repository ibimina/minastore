import { useContext} from "react";
import { CartContext } from "../context/CartContext";


export function useCart() {
 const context = useContext(CartContext);

 if (context === undefined) {
   throw new Error("use context within provided scope");
 } 
   return context;
 
}

