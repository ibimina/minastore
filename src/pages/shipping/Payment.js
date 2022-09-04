import React from "react";

export default function Payment() {
  return (
    <div>
      <h1>payment</h1>

      <form action="">
        <label htmlFor="">
            <span>card number</span>
          <input type="number" name="" id="" />
        </label>
        <label htmlFor="">
            <span>Expiration date</span>
          <input type="month" name="" id="" />
          <input type="number" />
        </label>
        <label htmlFor="">
            <span>Name of card holder</span>
          <input type="text" />
        </label>
        <label htmlFor="">
            <span>cvv(security code)</span>
          <input type="text" />
        </label>
        <input type="submit" value="pay" />
      </form>
      <div>order summary</div>
      <button>return to shipping page link</button>
    </div>
  );
}
