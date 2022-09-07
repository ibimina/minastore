//react hook
import { useState } from "react";

//fetch hook
import { useFetch } from "../../hooks/useFetch";

//components
import ProductList from "../home/ProductList";
import Filter from "../../components/Filter";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

export default function LipStick() {
  
  const [url, setUrl] = useState(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"
  );
  const { documents, isPending, error } = useFetch(url);

  const handleChange = (e) => {
    e.preventDefault();
    setUrl(url + "&brand=" + e.target.brand.value);
  };

  return (
    <div className="con">
      <h2 className="top-text">Lipstick</h2>
      <Filter type={"blush"} handleChange={handleChange} />

      {error && <Error />}
      {isPending && <Loading />}
      {documents && <ProductList documents={documents} />}
    </div>
  );
}
