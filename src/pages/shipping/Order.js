import React from "react";
import { useState, useEffect } from "react";

export default function Order({shippingPrice}) {
  const [order, setOrder] = useState([]);
    const [subTotal, setSubTotal] = useState();

  useEffect(() => {
    let localcart = localStorage.getItem("addcart");
    localcart = JSON.parse(localcart);

    if (localcart !== null) {
      setOrder(localcart);
    
      let rent = [];
      localcart.forEach((element) => {
        return rent.push(element.quantity * element.price);
      });
      const grandtotal = rent.reduce((a, b) => {
        return a + b;
      });
      setSubTotal(grandtotal)
    
    }
  }, []);

  return (
    <>
      <div>
        <p>Your order</p>
        {order.map((cart, index) => (
          <li key={index} className="order-con">
            <div className="order-fl">
              <img src={cart.image} alt={`${cart.name}`} className="cart-img" />
              <div>
                <p className="productname">{cart.name}</p>
                <div className="shades-con">
                  <p>color:</p>
                  <button
                    style={{ backgroundColor: cart.color }}
                    className="shades"
                  >
                    <span className="sr-only">
                      {cart.colorname} shades of {cart.name}
                    </span>
                  </button>
                  <p> {cart.colorname}</p>
                </div>
                <div className="order-q">
                  <p className="total no-sp">
                    quantity: <span>{cart.quantity}</span>
                  </p>
                  <p className="total no-sp">
                    <span>
                      Price ${(cart.price * cart.quantity).toFixed(2)}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </div>

      <h1 className="cart-title">total</h1>

      <div className="sub subtitaltotal">
        <p> subtotal </p>
        <p>${subTotal}</p>
      </div>
      <div className="sub subtitaltotal">
        <p>shipping</p>
        <p>${shippingPrice}</p>
      </div>
      <div className="sub subtitaltotal">
        <p>Total</p>
        <p>${(subTotal + Number(shippingPrice))}</p>
      </div>
    </>
  );
}
