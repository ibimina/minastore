import React from "react";

export default function Shipping() {
  return (
    <div>
      <h1>contact information</h1>
      <form>
        <label>
          <span>First Name</span>
          <input type="text" name="" id="" />
        </label>
        <label>
          <span>Last Name</span>
          <input type="text" name="" id="" />
        </label>
        <label>
          <span>Email</span>
          <input type="text" name="" id="" />
        </label>
        <label>
          <span>Phone</span>
          <input type="text" name="" id="" />
        </label>
        <h3>shipping</h3>
        <label>
          <span>Country</span>
          <input type="text" />
        </label>
        <span>city</span>
        <input type="text" />
        <label>
          <span>Address,apartment,suite</span>
          <input type="text" />
        </label>

        <label htmlFor="">
          <span>Postal code</span>
          <input type="text" name="" id="" />
        </label>
        <input type="submit" value="continue to shipping" />
      </form>
      <div>
        show order with ption to remove
      </div>
    </div>
  );
}
