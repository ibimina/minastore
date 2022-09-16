import React from "react";
import { Link } from "react-router-dom";

export default function ProductCon({
  imageSrc,
  productname,
  productamount,
  ratings,
  productid,
  category,
  tag
}) {

  return (
    <Link to={`/products/${productid}`} className="link top">
      <figure>
        <img src={imageSrc} alt={`${productname}`} className="productimg" />
      </figure>
      <div className="details">
        <p className="productname"> {category}</p>
        <p className="productname">{productname}</p>
        <div className="price-con">
          <p className="productamount">
            {productamount === "0.0" ? "$3.5" : "$" + productamount}
          </p>
          <div className="ratings">
            <span>{ratings === null ? "0" : ratings}</span>
            <img
              src={process.env.PUBLIC_URL + "/images/star.png"}
              alt="product star ratings icon"
              className="star"
            />
          </div>
        </div>
        <p className="tag">Tags: {tag ? tag + "." :"no tags available"}</p>
      </div>
    </Link>
  );
}
