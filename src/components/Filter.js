// import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

import { useState } from "react";
export default function Filter({type,handleChange}) {
  const [filter, setFilter] = useState("false");
  const urll =
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=" +
    type;
  const { documents } = useFetch(urll);
  let r = [];
  if (documents) {
    documents.forEach((element) => {
    
      if (!r.includes(element.brand)) {
        r.push(element.brand);
      }
    });
  }
    const handleClick = (e) => {
      let rr = e.target.getAttribute("aria-pressed");
      if (rr === "false") {
        e.target.setAttribute("aria-pressed", "true");
        setFilter("true");
      } else {
        e.target.setAttribute("aria-pressed", "false");
        setFilter("false");
      }
    };
  return (
    <>
      <p>Brands </p>
      <button onClick={(e) => handleClick(e)} aria-pressed="false">
        <span className="sr-only">menu</span>
      </button>
      <form
        onSubmit={(e) => handleChange(e)}
        data-visible={filter}
        className="fibrands" >
        <div className="brandss">
          {documents &&
            r.map((bran) => (
              <label key={bran}>
                <input
                  type="radio"
                  name="brand"
                  id=""
                  value={bran ? bran : " "}
                />
                <span>{bran ? bran : "all"}</span>
              </label>
            ))}
        </div>
        {documents && <input type="submit" value="submit" className="filter" />}
      </form>
    </>
  );
}
