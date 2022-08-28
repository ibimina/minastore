
import ProductNavList from "../../components/ProductNavList";
import { useFetch } from "../../hooks/useFetch";

import "./product.css"

export default function ProductsNav() {
  const path = "./data.json";
  const { documents, isPending, error } = useFetch(path);

  const handleClick = ( e) => {

    let arrow = e.target.parentNode;
    if (arrow.className.includes("arrow")) {
   
      let subColl = arrow.parentNode.nextSibling;
      let visi = arrow.parentNode.nextSibling.getAttribute("data-visible");
    
      if (visi === "false") {
        subColl.setAttribute("data-visible", true);
        arrow.setAttribute("aria-pressed", true);
      } else {
        subColl.setAttribute("data-visible", false);
        arrow.setAttribute("aria-pressed", false);
      }

    }

  };
  return (
    <>
      <h2 className="prod">Products</h2>
      {error && <>error...</>}
      {isPending && <>Loading...</>}
      <ul className="collections">
        {documents &&
          documents.products.map((doc) => (
            <li key={doc.bodyproduct} className="list">
              <div className="container">
                <p> {doc.bodyproduct}</p>
                <figure
                  className="arrow"
                  onClick={(e) => handleClick(e)}
                  aria-pressed="false"
                >
                  <img src={doc.image} alt="arrow down icon" />
                </figure>
              </div>

              <ul className='part' data-visible="false">
                {doc.subproduct.map((sub) => (
                  <li key={sub.name}>
                    <ProductNavList imageSrc={sub.images} caption={sub.name} />
                  </li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
}
