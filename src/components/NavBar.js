///hooks
import { useState, useEffect } from "react";

//router imports
import { NavLink } from "react-router-dom";

//components
import ProductsNav from "./ProductsNav";

//usecontext hook
import { useCart } from "../hooks/useCart";
import Image from "./Image";

export default function NavBar() {
  const [open, setOpen] = useState("false");
  const [visible, setVisible] = useState("false");
  const { quantity, dispatch } = useCart();
  let localcart = localStorage.getItem("quantity");
  
  useEffect(() => {
    // if (localcart) {
    dispatch({ type: "ADD_ITEM", payload: localcart });
    // }
  }, [dispatch, localcart]);

  const handleClick = () => {
    if (open === "false") {
      setOpen("true");
      setVisible("false");
    } else {
      setOpen("false");
      setVisible("false");
    }
  };
  const handleVisi = () => {

    if (visible === "false") {
      setVisible("true");
      document.querySelector(".next").setAttribute("aria-pressed", "true");
    } else if (visible === "true") {
      document.querySelector(".next").setAttribute("aria-pressed", "false");
      setVisible("false");
     
    }
  };
  return (
    <header>
      <div className="logo">minastore</div>
      <div className="nav-con">
        <nav data-visible={open}>
          <ul className="nav-list">
            <li onClick={handleClick} className="mar rm">
              <NavLink to="/"> home</NavLink>
            </li>
            <li className="nav-arr">
              products
              <button
                onClick={handleVisi}
                className="next ops-btn"
                aria-pressed="false"
              >
                <span className="sr-only">product menu</span>
              </button>
              <ProductsNav visi={visible} handleVisi={handleVisi} />
            </li>
          </ul>
        </nav>

        <div className="flex">
          <NavLink to="/carts" className=" flex-cart">
            <p className="num">{quantity}</p>
            <Image
              imageSrc={process.env.PUBLIC_URL + "/images/icon-cart.svg"}
              alt="cart icon"
              className="cart-icon"
            />
          </NavLink>
          <button
            className="mobile-navigation"
            aria-expanded={open}
            onClick={handleClick}
          >
            <span className="sr-only">menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
