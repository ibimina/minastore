import ProductCon from "../../components/ProductCon";
import { useFetch } from "../../hooks/useFetch";


export default function BestDealSec() {
    const query =
      "http://makeup-api.herokuapp.com/api/v1/products.json?price_less_than=5&price_greater_than=0";
const {documents, isPending,error}=useFetch(query)
//  {documents && console.log(documents)} 
 if (documents === null) {
    <>No docs</>
 }


return (
  <section>
    <h1>Best Deals</h1>
    {error && <>error...</>}
    {isPending && <> loading...</>}
    <div className="ranks">
      {documents &&
        documents.slice(0, 2).map((doc) => (
          <div key={doc.id}>
            <ProductCon
              imageSrc={doc.api_featured_image}
              productname={doc.name}
              productamount={doc.price}
              ratings={doc.rating}
              productid={doc.id}
              category={doc.category}
            />
          </div>
        ))}
    </div>
  </section>
);
}
