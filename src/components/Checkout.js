import React from 'react'
import { Link } from 'react-router-dom';
import Image from './Image';

export default function Checkout({grandTotal}) {
  return (
    <div className="total-con">
      <h1 className="cart-title">total</h1>
      <div className="con-t">
        <div className="checkout">
          <div className="sub subtitaltotal">
            <p> subtotal </p>
            <p>${grandTotal}</p>
          </div>
         
          <div className="sub shipping">
            <p>shipping</p>
            <p>calulated on checkout</p>
          </div>
          <div className="sub shipping">
            <p>Total</p>
            <p>${grandTotal}</p>
          </div>
        </div>
        <Link to="/shipping" className="ship-link">
          checkout
        </Link>
        <div className="card-type">
          <p>we accept</p>
          <div className="cards">
            <Image
              imageSrc={process.env.PUBLIC_URL + "/images/icon-mastercard.svg"}
              alt="master card icon"
              className="card-img"
            />
            <Image
              imageSrc={process.env.PUBLIC_URL + "/images/icon-visa.svg"}
              alt="visa card icon"
              className="card-img"
            />
            <Image
              imageSrc={process.env.PUBLIC_URL + "/images/icon-paypal.svg"}
              alt="paypal card icon"
              className="card-img"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
