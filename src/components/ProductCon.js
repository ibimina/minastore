import React from "react";
import { Link } from "react-router-dom";

export default function ProductCon({
  imageSrc,
  productname,
  productamount,
  ratings,
  productid,
  category,
}) {
  // console.log(category)
  return (
    <Link to={`/products/${productid}`}>
      <figure>
        <img src={imageSrc} alt={`${productname}`} />
      </figure>
      <p className="productname">{category}</p>
      <p className="productname">{productname}</p>
      <p className="productamount">
        {productamount === "0.0" ? "3.5" : productamount}
      </p>
      <div className="ratings">
        <span>{ratings === null ? "0" : ratings}</span>
        <img
          src={process.env.PUBLIC_URL + "/images/star.png"}
          alt="product star ratings icon"
        />
      </div>
    </Link>
  );
}
