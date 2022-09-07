import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import "./thankyou.css";
export default function Thankyou() {
  const { firstNames,dispatch } = useCart();
 
  useEffect(() => {
    let localcart = localStorage.getItem("addcart");
    localcart = JSON.parse(localcart);
    localcart = [];
    let empty = JSON.stringify(localcart);
    localStorage.setItem("addcart", empty);
      localStorage.setItem("quantity","");
      dispatch({ type: "ADD_ITEM", payload: "" });
  }, [dispatch]);
  return (
    <div className="thanks">
      <div className="thanks-con">
        <h1 className="t-hd"> Thanks {firstNames} for your purchase</h1>
        <p>your order details will be sent to your inbox</p>
        <p className="t-hd">happy shopping</p>
        <Link to="/" className="t-hm">
          continue shopping
        </Link>
      </div>
    </div>
  );
}
