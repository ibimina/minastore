import { useState } from "react";
import { useItem } from "../hooks/useItem";

export default function CartCon({ id, name, price, image, color,colorname }) {
  const [quan, setQuan] = useState(0);

  const item = {
    id,
    color,
    quantity: quan,
    image,
    price :price === "0.0" ?"3.5":price,
    name,
    colorname
  };
 
const {addItem}=useItem()

  return (
    <div className="addprod-con">
      <div className="quantity-con">
        <button className="plus ops-btn fill" onClick={() => setQuan(quan + 1)}>
          <span className="sr-only">plus</span>
        </button>
        <p className="prod-quantity">{quan}</p>{" "}
        <button
          className="minus ops-btn fill"
          onClick={() => (quan > 0 ? setQuan(quan - 1) : setQuan(0))}
        >
          <span className="sr-only">minus</span>
        </button>
      </div>
     
      {!quan > 0 && (
        <button className="addcart" disabled>
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
            alt="cart icon"
            className="add-icon"
          />
          <span>Add to cart</span>{" "}
        </button>
      )}
      {quan > 0 && (
        <div className="add-con">
        <p className="aded">added to cart</p>
          <button className="addcart" onClick={()=>addItem(item,id,color)}>
            {" "}
            <img
              src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
              alt="cart icon"
              className="add-icon"
            />
            <span>Add to cart</span>
          </button>
        </div>
      )}
    </div>
  );
}
