import React from "react";
import { Link,  useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import Order from "./Order";

export default function Payment() {
   const {
     shippingPrices
    
   } = useCart()
  const navigate = useNavigate()
 
const handleSubmit =(e)=>{
  e.preventDefault()
  navigate("/thankyou")
}
console.log(shippingPrices)

  return (
    <div className="ship-con">
      <h1>payment</h1>
      <div className="re">
        <form className="shipping pay-form" onSubmit={handleSubmit}>
          <div className="pay-con">
            <label className="pay-method">
              <input type="radio" name="payment" className="radio" />
              <span>paypal</span>
            </label>
            <label className="pay-method">
              <input type="radio" name="payment" className="radio" />
              <span>master</span>
            </label>
            <label className="pay-method">
              <input type="radio" name="payment" className="radio" />
              <span>visa</span>
            </label>
          </div>
          <div className="ship-flex pae">
            <label className="ship-flex nm-in">
              <span>card number</span>
              <input type="number" name="" />
            </label>

            <label className="ship-flex nm-in">
              <span>Expiration date</span>
              <input type="month" name="" />
            </label>
          </div>

          <label className="ship-flex nm-in">
            <span>Name of card holder</span>
            <input type="text" />
          </label>
          <label className="ship-flex nm-in">
            <span>cvv(security code)</span>
            <input type="text" className="cvv" />
          </label>
          <input
            type="submit"
            value="complete purchase"
            className="pay submit-btn"
          />
        </form>
        <div>
          <Order shippingPrice={shippingPrices} />
        </div>
      </div>
      <Link to="/shipping">return to shipping page link</Link>
    </div>
  );
}
