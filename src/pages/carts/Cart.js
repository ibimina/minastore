//helper
import { utilis } from "./utilis";
//hook
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
//components
import AddItem from "../../components/AddItem";
import Image from "../../components/Image";
//contexthook
import { useCart } from "../../hooks/useCart";
//style
import "./cart.css";
import CartItem from "../../components/CartItem";
import Checkout from "../../components/Checkout";

export default function Cart() {
  const [cartt, setCartt] = useState([]);
  const { dispatch } = useCart();
  const [grandTotal, setGrandTotal] = useState();

  useEffect(() => {
    let localcart = localStorage.getItem("addcart");
    localcart = JSON.parse(localcart);

    if (localcart.length > 0) {
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

  return (
    <>
      <div className="cart-page">
        <div className="v">
          <div>
            <h1 className="cart-title">cart</h1>
            {cartt.length === 0 && <p className="error-msgg"> cart empty</p>}
            {cartt.length > 0 &&
              cartt.map((cart, index) => (
                <CartItem
                  key={index}
                  cart={cart}
                  editItem={editItem}
                  deleteItem={deleteItem}
                  removeItem={removeItem}
                />
              ))}
          </div>
          {cartt.length > 0 && <Checkout grandTotal={grandTotal} />}
        </div>
      </div>
    </>
  );
}
