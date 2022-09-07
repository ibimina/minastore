

//style
import "./cart.css";
import CartItem from "../../components/CartItem";
import Checkout from "../../components/Checkout";
import { useItem } from "../../hooks/useItem";

export default function Cart() {
 
const  { removeItem, grandTotal, editItem, deleteItem,cartt } =useItem()


  return (
    <>
      <div className="cart-page">
        <div className="v">
          <div>
            <h1 className="cart-title">cart</h1>
            {cartt.length === 0 && <p className="error-msgg"> cart empty</p>}
            {cartt.length > 0 &&
              cartt.map((cart, index) => (
                <CartItem
                  key={index}
                  cart={cart}
                  editItem={editItem}
                  deleteItem={deleteItem}
                  removeItem={removeItem}
                />
              ))}
          </div>
          {cartt.length > 0 && <Checkout grandTotal={grandTotal} />}
        </div>
      </div>
    </>
  );
}
