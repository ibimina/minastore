//hook
import { useFetch } from "../../hooks/useFetch";

//components import
import ProductCon from "../../components/ProductCon";
import Error from "../../components/Error";
import Loading from "../../components/Loading";

export default function TopSection() {
  const query =
    "http://makeup-api.herokuapp.com/api/v1/products.json?rating_greater_than=4";

  const { documents, isPending, error } = useFetch(query);


  return (
    <section className="top-rank">
      <h2 className="top-text">Top ranking products</h2>
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
