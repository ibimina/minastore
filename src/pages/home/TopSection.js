//hook
import { useFetch } from "../../hooks/useFetch";

import ProductCon from "../../components/ProductCon";

export default function TopSection() {
  const query =
    "http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4";

  const { documents, isPending, error } = useFetch(query);

  // if (documents === null) {
  //   return <>No docs</>;
  // }

  return (
    <section className="top-rank">
      <h2 className="top-text">Top ranking products</h2>

      <div className="ranks">
        {error && <>error...</>}
        {isPending && <> loading...</>}
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
