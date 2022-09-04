import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddItem from "../../components/AddItem";
import { useCart } from "../../hooks/useCart";

import "./cart.css";

export default function Cart() {
  const [cartt, setCartt] = useState([]);
  const { dispatch } = useCart();
  const [grandTotal, setGrandTotal] = useState();

  useEffect(() => {
    let localcart = localStorage.getItem("addcart");
    localcart = JSON.parse(localcart);

    if (localcart !== null) {
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
    // let cartCopy = [...cartt];
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

    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("addcart", cartString);

    let getQuantity = [];
    cartCopy.forEach((element) => getQuantity.push(element.quantity));

    let totalQuantity = getQuantity.reduce((a, b) => a + b);
    let minatotalQuantity = JSON.stringify(totalQuantity);
    localStorage.setItem("quantity", minatotalQuantity);

    dispatch({ type: "ADD_ITEM", payload: totalQuantity });
    //update grandtotal price
    let getGrandtotalArr = [];
    cartCopy.forEach((element) =>
      getGrandtotalArr.push(element.quantity * element.price)
    );
    const getGrandTotal = getGrandtotalArr.reduce((a, b) => a + b);
    setGrandTotal(getGrandTotal);
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
    if (existentItem.quantity < 1) {
      //remove item  by filtering it from cart array
      cartCopy = cartCopy.filter((item) => item !== existentItem);
    }

    //again, update state and localState
    setCartt(cartCopy);
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("addcart", cartString);

    let getQuantityArr = [];
    cartCopy.forEach((element) => getQuantityArr.push(element.quantity));

    let getQuantity = getQuantityArr.reduce((a, b) => a + b);

    let cartQuan = JSON.stringify(getQuantity);
    localStorage.setItem("quantity", cartQuan);

    dispatch({ type: "ADD_ITEM", payload: getQuantity });

    let getGrandtotalArr = [];
    cartCopy.forEach((element) =>
      getGrandtotalArr.push(element.quantity * element.price)
    );

    const getGrandTotal = getGrandtotalArr.reduce((a, b) => a + b);
    setGrandTotal(getGrandTotal);
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
    let cartString = JSON.stringify(cartCopy);
    localStorage.setItem("addcart", cartString);

    let getQuantityArr = [];
    cartCopy.forEach((element) => getQuantityArr.push(element.quantity));

    let getQuantity = getQuantityArr.reduce((a, b) => a + b);

    let cartQuan = JSON.stringify(getQuantity);
    localStorage.setItem("quantity", cartQuan);

    dispatch({ type: "ADD_ITEM", payload: getQuantity });

    let getGrandtotalArr = [];
    cartCopy.forEach((element) =>
      getGrandtotalArr.push(element.quantity * element.price)
    );

    const getGrandTotal = getGrandtotalArr.reduce((a, b) => a + b);
    setGrandTotal(getGrandTotal);
  };

  return (
    <>
      <div className="cart-page">
        <h1 className="cart-title">cart</h1>
        {cartt.length === 0 && <p className="error-msgg"> cart empty</p>}
        {cartt.map((cart, index) => (
          <li key={index} className="cart-con">
            <Link to={`/products/${cart.id}`} className="">
              <figure>
                <img
                  src={cart.image}
                  alt={`${cart.name}`}
                  className="cart-img"
                />
              </figure>
            </Link>
            <div className="cart-q">
              {/* <div> */}
              <p className="productname">{cart.name}</p>

              <div className="na-co">
                <p className="productamount">${cart.price}</p>

                <div className="shades-con">
                  <button
                    style={{ backgroundColor: cart.color }}
                    className="shades"
                  >
                    <span className="sr-only">
                      {cart.colorname} shades of {cart.name}
                    </span>
                  </button>
                  <p>{cart.colorname}</p>
                </div>
              </div>
              <p className="total">
                <span>
                  Total:${cart.price}x {cart.quantity}
                </span>
                <span>${cart.price * cart.quantity}</span>
              </p>
              <div className="dele-add">
                <AddItem
                  editItem={editItem}
                  removeItem={removeItem}
                  id={cart.id}
                  color={cart.color}
                  quantity={cart.quantity}
                />

                <button
                  className="delete ops-btn"
                  onClick={() => deleteItem(cart.id, cart.color)}
                >
                  <span className="sr-only">delete cart</span>
                </button>
              </div>
              {/* </div> */}
            </div>
          </li>
        ))}
        <div className="checkout">
          <div className="sub subtitaltotal">
            <p> subtotal </p>
            <p>${grandTotal}</p>
          </div>
          <div className="sub shipping">
            <p>shipping</p>
            <p>calulated on checkout</p>
          </div>
        </div>
        <Link to="/shipping" className="ship-link">
          checkout
        </Link>
        <div className="card-type">
          <p>we accept</p>
          <div>ico of master card visa verve card</div>
        </div>
      </div>
    </>
  );
}
