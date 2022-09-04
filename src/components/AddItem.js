import React from 'react'

export default function AddItem({editItem,removeItem,id, color,quantity}) {
  return (
    <div className="quantity-con red">
      <button
        className="plus ops-btn bt"
        onClick={() => editItem(id, color)}
      >
        <span className="sr-only">plus</span>
      </button>
      <p className="cart-quantity">{quantity}</p>{" "}
      <button
        className="minus ops-btn bt"
        onClick={() => removeItem(id, color)}
      >
        <span className="sr-only">minus one item quantity</span>
      </button>
    </div>
  );
}
