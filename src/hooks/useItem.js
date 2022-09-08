import { useEffect, useState} from "react";
import { utilis } from "../pages/carts/utilis";
import { useCart } from "./useCart";

export const useItem = () => {
  const [cartt, setCartt] = useState([]);
  const [grandTotal, setGrandTotal] = useState();
  const { dispatch } = useCart();
  useEffect(() => {
    let localcart = localStorage.getItem("addcart");
    localcart = JSON.parse(localcart);

    if (localcart !== null && localcart.length > 0) {
      setCartt(localcart);
      let rent = [];
      localcart.forEach((element) => {
        return rent.push(element.quantity * element.price);
      });
      const grandtotal = rent.reduce((a, b) => {
        return a + b;
      });

      setGrandTotal(grandtotal.toFixed(2));
    }
  }, []);
  
  const editItem = (itemID, color) => {
    let cartCopy = [...cartt];
    //find if item exists, just in case
    let existentItem = cartCopy.find(
      (item) => item.id === itemID && item.color === color
    );

    //if it doesnt exist simply return
    if (!existentItem) return;

    //continue and update quantity
    existentItem.quantity++;

    //again, update state and localState
    setCartt(cartCopy);
    setGrandTotal(utilis(cartCopy, dispatch));
  };

  const removeItem = (itemID, color) => {
    let cartCopy = [...cartt];

    //find if item exists, just in case
    let existentItem = cartCopy.find(
      (item) => item.id === itemID && item.color === color
    );

    //if it doesnt exist simply return
    if (!existentItem) return;

    //continue and update quantity
    if (existentItem.quantity) {
      existentItem.quantity--;
    }
    //validate result
    if (existentItem.quantity === 0) {
      //remove item  by filtering it from cart array
      cartCopy = cartCopy.filter((item) => item !== existentItem);
    }

    //again, update state and localState
    setCartt(cartCopy);
    setGrandTotal(utilis(cartCopy, dispatch));
  };

  const deleteItem = (itemID, color) => {
    let cartCopy = [...cartt];

    //find if item exists, just in case
    let existentItem = cartCopy.find(
      (item) => item.id === itemID && item.color === color
    );

    //if it doesnt exist simply return
    if (!existentItem) return;

    //validate result
    if (existentItem) {
      //remove item  by filtering it from cart array
      cartCopy = cartCopy.filter((item) => item !== existentItem);
    }

    //again, update state and localState
    setCartt(cartCopy);
    setGrandTotal(utilis(cartCopy, dispatch));
  };

  const addItem = (item, id, color) => {
    let cartCopy = [...cartt];
    let existing = cartCopy.find(
      (cartItem) => cartItem.id === id && cartItem.color === color
    );
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cartCopy.push(item);
    }
    setCartt(cartCopy);
    let ee = [];
    cartCopy.forEach((element) => ee.push(element.quantity));
    let min = JSON.stringify(cartCopy);
    localStorage.setItem("addcart", min);

    let rr = ee.reduce((a, b) => a + b);
    console.log(ee);

    let minn = JSON.stringify(rr);
    localStorage.setItem("quantity", minn);
    dispatch({ type: "ADD_ITEM", payload: rr });

    document.querySelector(".aded").style.display = "block";
    const interval = setTimeout(() => {
      document.querySelector(".aded").style.display = "none";
    }, 500);
    return () => clearInterval(interval);
  };

  return { removeItem, grandTotal, editItem, deleteItem, cartt, addItem };
};
