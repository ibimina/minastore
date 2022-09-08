import React from "react";

//styles
import "./shipping.css";

import { Link, useNavigate } from "react-router-dom";
//compoment
import Order from "./Order";

//hook
import { useCart } from "../../hooks/useCart";
import Label from "../../components/Label";
import ShipRadioBtn from "../../components/ShipRadioBtn";

export default function Shipping() {
  const { shippingPrices} = useCart();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/payment");
  };

  return (
    <div className="ship-con">
      <div className="re">
        <form className="shipping form top-rank" onSubmit={handleSubmit}>
          <h1 className="pay-con">contact information</h1>
          <div className="ship-flex pae">
            <Label
              label="First Name"
              type="text"
              name="firstname"
              actype="ADD_NAME"
            />
            <Label
              label="Last Name"
              type="text"
              name="lastname"
              actype="ADD_LNAME"
            />
          </div>
          <div className="ship-flex pae">
            <Label label="Email" type="text" name="email" actype="ADD_EMAIL" />
            <Label
              label="Phone Number"
              type="tel"
              name="phonenumber"
              actype="ADD_PHONENUMBER"
            />
          </div>

          <h3>shipping</h3>
          <div className="ship-flex pae">
            <Label
              label="Country"
              type="text"
              name="country"
              actype="ADD_COUNTRY"
            />

            <Label label="City" type="text" name="city" actype="ADD_CITY" />
          </div>
          <div className="ship-flex pae">
            <Label
              label="Address,apartment,suite"
              type="text"
              name="address"
              actype="ADD_ADDRESS"
            />

            <Label
              label="Postal code"
              type="text"
              name="postal"
              actype="ADD_POSTALCODE"
            />
          </div>
          <p>shipping method</p>

          <ShipRadioBtn
            value="0"
            shiptype="Standart shipping"
            days="1-20days"
            amount="free"
          />
          <ShipRadioBtn
            value="10"
            shiptype="Express shipping"
            days="1-2days"
            amount="$10"
          />
          <input
            type="submit"
            value="continue to payment"
            className="submit-btn"
          />
        </form>
        <div>
          <Order shippingPrice={shippingPrices} />
        </div>
      </div>
      <Link to="/carts">back to cart</Link>{" "}
    </div>
  );
}
