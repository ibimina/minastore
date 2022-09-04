import { useEffect, useState } from "react";
import { useCart } from "../hooks/useCart";

export default function CartCon({ id, name, price, image, color,colorname }) {
  const [quan, setQuan] = useState(0);
  let [addCart, setAddCart] = useState([]);
const {dispatch}=useCart()
  const item = {
    id,
    color,
    quantity: quan,
    image,
    price,
    name,
    colorname
  };
 

  useEffect(() => {
    let localcart = localStorage.getItem("addcart");
    localcart = JSON.parse(localcart);

    if (localcart) {
      setAddCart(localcart);
    }
  }, []);
  // console.log(addCart);

  const addItem = () => {
let cartCopy = [...addCart];
    let existing = cartCopy.find(cartItem=> cartItem.id === id && cartItem.color === color);
    if (existing) {
      existing.quantity += item.quantity;
    } else {
      cartCopy.push(item);
    }
    setAddCart(cartCopy);
    let ee=[]
     cartCopy.forEach((element) => ee.push(element.quantity));
    let min = JSON.stringify(cartCopy);
    localStorage.setItem("addcart", min);

  let rr=  ee.reduce((a,b)=>a+b)
  console.log(rr)

let minn = JSON.stringify(rr);
localStorage.setItem("quantity", minn);
// let er = localStorage.getItem("quantity")
 dispatch({ type: "ADD_ITEM", payload: rr });

  };
  //{quantity:quan,
  //name:name
  //id:id
  //color:color
  //}

  return (
    <div className="addprod-con">
      <div className="quantity-con">
        <button className="plus ops-btn" onClick={() => setQuan(quan + 1)}>
          <span className="sr-only">plus</span>
        </button>
        <p className="prod-quantity">{quan}</p>{" "}
        <button
          className="minus ops-btn"
          onClick={() => (quan > 0 ? setQuan(quan - 1) : setQuan(0))}
        >
          <span className="sr-only">minus</span>
        </button>
      </div>

      {!quan > 0 && (
        <button
          className="addcart"
          disabled
        >
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
            alt="cart icon"
            className="cart-icon"
          />
          <span>Add to cart</span>{" "}
        </button>
      )}
      {quan > 0 && (
        <button
          className="addcart"
          onClick={addItem}
        >
          {" "}
          <img
            src={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
            alt="cart icon"
            className="cart-icon"
          />
          <span>Add to cart</span>{" "}
        </button>
      )}
     
    </div>
  );
}
