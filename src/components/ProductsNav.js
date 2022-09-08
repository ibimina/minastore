

import Category from "./Category";
import Error from "./Error";
import Loading from "./Loading";
import { useFetch } from "../hooks/useFetch";

import "../../src/pages/products/product.css"

export default function ProductsNav({visi}) {
 
  const path = "./data.json";
  const { documents, isPending, error } = useFetch(path);

  return (
    <div className="pro-list" data-visible={visi}>
    
      <h2 className="prod bk">Products</h2>
      {error && <Error/>}
      {isPending && <Loading/>}
      <ul className="collections">
        {documents &&
          documents.products.map((doc) => (
            <Category key={doc.bodyproduct} doc={doc}/>
          ))}
      </ul>
    </div>
  );
}
