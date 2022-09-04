//components
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import ProductCon from "../../components/ProductCon";

//hooks import
import { useFetch } from "../../hooks/useFetch";

export default function BestDealSec() {
  const query =
    "http://makeup-api.herokuapp.com/api/v1/products.json?price_less_than=5&price_greater_than=0";
  const { documents, isPending, error } = useFetch(query);

  if (documents === null) {
    <>No docs</>;
  }

  return (
    <section className="top-rank">
      <h2 className="top-text">Best Deals</h2>
      {error && <Error />}
      {isPending && <Loading />}
      <div className="ranks">
        {documents &&
          documents
            .slice(0, 4)
            .map((doc) => (
              <ProductCon
                key={doc.id}
                imageSrc={doc.api_featured_image}
                productname={doc.name}
                productamount={doc.price}
                ratings={doc.rating}
                productid={doc.id}
                category={doc.category}
                tag={doc.tag_list.join(",")}
              />
            ))}
      </div>
    </section>
  );
}
