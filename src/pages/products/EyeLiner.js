//react imports
import { useState } from "react";

//fetch hook
import { useFetch } from "../../hooks/useFetch";

//components
import ProductList from "../home/ProductList";
import Filter from "../../components/Filter";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

export default function EyeLiner() {
  const [url, setUrl] = useState(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
  );
  const { documents, isPending, error } = useFetch(url);
  const handleChange = (e) => {
    e.preventDefault();
    setUrl(url + "&brand=" + e.target.brand.value);
  };

  return (
    <div className="con">
      <Filter type={"eyeliner"} handleChange={handleChange} />
      {error && <Error />}
      {isPending && <Loading />}
      {documents && <ProductList documents={documents} />}
    </div>
  );
}
