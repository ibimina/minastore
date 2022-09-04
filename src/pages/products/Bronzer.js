//react import
import { useState } from "react";

//fetch hook
import { useFetch } from "../../hooks/useFetch";

//components
import Error from "../../components/Error";
import Filter from "../../components/Filter";
import Loading from "../../components/Loading";
import ProductList from "../home/ProductList";

export default function Bronzer() {

  const [url, setUrl] = useState(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=bronzer"
  );
  const { documents, isPending, error } = useFetch(url);

  const handleChange = (e) => {
    e.preventDefault();
    setUrl(url + "&brand=" + e.target.brand.value);
  };

  return (
    <div className="con">
      <Filter type={"bronzer"} handleChange={handleChange} />
      {error && <Error />}
      {isPending && <Loading />}
      {documents && <ProductList documents={documents} />}
    </div>
  );
}
