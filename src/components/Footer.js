import React from "react";

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <h2 className="logo">minastore</h2>
      <p>Enhance your cosmetics shopping experience with online platform with exclsive discounts and more</p>
      <ul className="footer-ul">
        <li className="footer-list">
          <span className="ft-t"> services</span>
          <ul>
            <li>
              <span>products</span>{" "}
            </li>
          </ul>
        </li>
        <li className="footer-list">
          <span className="ft-t">company</span>
          <ul>
            <li>
              {" "}
              <span>home</span>{" "}
            </li>
            <li>
              {" "}
              <span>about</span>{" "}
            </li>
          </ul>
        </li>
        <li className="footer-list">
          <span className="ft-t">support</span>
          <ul>
            <li>
              {" "}
              <span>terms of service</span>
            </li>
            <li>
              <span>private policy</span>
            </li>
            <li>
              <span> contact us</span>
            </li>
          </ul>
        </li>
      </ul>
      <div className="flex social">
        <Link to="/cart">
          <img
            src={process.env.PUBLIC_URL + "/images/icon-facebook.svg"}
            alt="facebook icon"
            className="social-icon"
          />
        </Link>
        <Link to="/cart">
          <img
            src={process.env.PUBLIC_URL + "/images/icon-instagram.svg"}
            alt="instagram icon"
            className="social-icon"
          />
        </Link>
        <Link to="/cart">
          <img
            src={process.env.PUBLIC_URL + "/images/icon-pinterest.svg"}
            alt="pinterest icon"
            className="social-icon"
          />
        </Link>
        <Link to="/cart">
          <img
            src={process.env.PUBLIC_URL + "/images/icon-twitter.svg"}
            alt="twitter icon"
            className="social-icon"
          />
        </Link>
      </div>
    </footer>
  );
}
