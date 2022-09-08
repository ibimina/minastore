import React from "react";
import { useState } from "react";
import CartCon from "./CartCon";
import GetStars from "./GetStars";

export default function GetColors({ documents, id }) {
  const [color, setColor] = useState();
  const [colorName, setColorName] = useState();
  const handleColor = (value, name) => {
    setColor(value);
    setColorName(name);
  };

  return (
    <>
      <p> {documents.name}</p>
      <p> ${documents.price === "0.0" ? 3.5 : documents.price}</p>
      <GetStars documents={documents} />
      <p>colors:</p>
      <div className="color-con">
        {documents.product_colors.map((color, index) => (
          <div key={index} className="shades-con">
            <button
              style={{ backgroundColor: color.hex_value }}
              key={color.hex_value}
              className="shades"
              onClick={() => handleColor(color.hex_value, color.colour_name)}
            >
              {" "}
              <span className="sr-only">{color.colour_name}</span>
            </button>

            <p>{color.colour_name}</p>
          </div>
        ))}
      </div>
      <CartCon
        price={documents.price}
        image={documents.api_featured_image}
        name={documents.name}
        id={id}
        color={color}
        colorname={colorName}
      />
    </>
  );
}
