import React from "react";

import { useItem } from "../../hooks/useItem";

export default function Order({shippingPrice}) {

const {cartt,grandTotal}=useItem()

  return (
    <div>
      <div>
        <h1 className="pay-con">Your order</h1>
        <div>
          {cartt.map((cart, index) => (
            <li key={index} className="order-con">
              <div className="order-fl">
                <img
                  src={cart.image}
                  alt={`${cart.name}`}
                  className="cart-img"
                />
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
                          ${(cart.price * cart.quantity).toFixed(2)}{" "}
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
          <p className="bold">${grandTotal}</p>
        </div>
        <div className="sub subtitaltotal">
          <p className="quant">shipping</p>
          <p className="bold">${shippingPrice}</p>
        </div>
        <div className="sub subtitaltotal">
          <p className="quant">Total</p>
          <p className="bold">${Number(grandTotal) + Number(shippingPrice)}</p>
        </div>
      </div>
    </div>
  );
}
