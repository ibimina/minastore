

import Category from "../../components/Category";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import { useFetch } from "../../hooks/useFetch";

import "./product.css"

export default function ProductsNav({visi,handleVisi,handle}) {
 
  const path = "./data.json";
  const { documents, isPending, error } = useFetch(path);


  return (
    <div className="pro-list" data-visible={visi}>
  
      <button onClick={handleVisi}>
        <span className="sr-only">back</span>
      </button>
      <h2 className="prod">Products</h2>
      {error && <Error/>}
      {isPending && <Loading/>}
      <ul className="collections">
        {documents &&
          documents.products.map((doc) => (
            <Category key={doc.bodyproduct} doc={doc} hand={handleVisi} handle={handle}/>
          ))}
      </ul>
    </div>
  );
}
