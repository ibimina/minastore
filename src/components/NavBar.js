import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
const [open,setOpen]=useState("false")
const handleClick =()=>{
  if (open==="false") {
    setOpen("true")
  } else {
     setOpen("false");
  }
}
  return (
    <header>
      <div className="logo">minastore</div>
      <nav data-visible={open}>
        <ul className="nav-list">
          <li onClick={handleClick}>
            <NavLink to="/"> home</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/about">about</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/products">products</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/faqs">FAQS</NavLink>
          </li>
          <li onClick={handleClick}>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
      <button
        className="mobile-navigation"
        aria-expanded={open}
        onClick={handleClick}
      >
        <span className="sr-only">menu</span>
      </button>
    </header>
  );
}

