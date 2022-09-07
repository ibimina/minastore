import React from 'react'
import AddItem from './AddItem';
import { Link } from 'react-router-dom';
export default function CartItem({cart,index,editItem,removeItem,deleteItem}) {
  return (
    <li key={index} className="cart-con">
      <Link to={`/products/${cart.id}`} className="">
        <img src={cart.image} alt={`${cart.name}`} className="cart-img" />
      </Link>
      <div className="cart-q">
        <p className="productname">{cart.name}</p>

        <div className="na-co">
          <p className="productamount">${cart.price}</p>
          <div className="shades-con">
            <button style={{ backgroundColor: cart.color }} className="shades">
              <span className="sr-only">
                {cart.colorname} shades of {cart.name}
              </span>
            </button>
            <p>{cart.colorname}</p>
          </div>
        </div>
        <p className="total">
          <span>
            Total: ${cart.price}x {cart.quantity}
          </span>
          <span>${(cart.price * cart.quantity).toFixed(2)}</span>
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
      </div>
    </li>
  );
}
