import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import ProductList from "../home/ProductList";
import Filter from "../../components/Filter";
import Goback from "../../components/Goback";
export default function Foundation() {
   const [url, setUrl] = useState(
     "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=foundation"
   );
   const { documents, isPending, error } = useFetch(url);
     const handleChange = (e) => {
       e.preventDefault();
       setUrl(url + "&brand=" + e.target.brand.value);
     };
  return (
    <div>
   <Goback/>
      <form onSubmit={(e) => handleChange(e)}>
        <Filter type={"foundation"} />
      </form>
      {error && <>error...</>}
      {isPending && <>loading...</>}
      {documents && <ProductList documents={documents} />}
    </div>
  );
}
