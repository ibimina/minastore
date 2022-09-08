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
        <h1 className="pay-con">Your order</h1>
        {order.map((cart, index) => (
          <li key={index} className="order-con">
            <div className="order-fl">
              <img src={cart.image} alt={`${cart.name}`} className="cart-img" />
              <div>
                <p className="productname">{cart.name}</p>
                <div className="shades-con">
                  <button
                    style={{ backgroundColor: cart.color }}
                    className="shades"
                  >
                    <span className="sr-only">
                      {cart.colorname} shade of {cart.name}
                    </span>
                  </button>
                  <p> {cart.colorname}</p>
                </div>
                <div className="order-q">
                  <p className="total no-sp quant">
                    quantity: <span>{cart.quantity}</span>
                  </p>
                  <p className="total no-sp">
                    <span className="quant">
                      Price{" "}
                      <span className="item-total">
                        $ {(cart.price * cart.quantity).toFixed(2)}{" "}
                      </span>{" "}
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
        <p className="quant"> subtotal </p>
        <p className="bold">${subTotal}</p>
      </div>
      <div className="sub subtitaltotal">
        <p className="quant">shipping</p>
        <p className="bold">${shippingPrice}</p>
      </div>
      <div className="sub subtitaltotal">
        <p className="quant">Total</p>
        <p className="bold">${Number(subTotal) + Number(shippingPrice)}</p>
      </div>
    </>
  );
}
