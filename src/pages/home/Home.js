//style
import "./home.css";

//home components
import TopSection from "./TopSection";
import BestDealSec from "./BestDealSec";
import ProductList from "./ProductList";
import { useFetch } from "../../hooks/useFetch";

export default function Home() {
  const query = "https://makeup-api.herokuapp.com/api/v1/products.json";

  const { documents, isPending, error } = useFetch(query);

  return (
    <div className="home-container">
      <div className="hero">
        <h1 className="hero-text">beauty shop</h1>
      </div>
      <TopSection />
      <BestDealSec />
      {error && <>error...</>}
      {isPending && <>Loading...</>}
      {documents && <ProductList documents={documents} />}
    </div>
  );
}
