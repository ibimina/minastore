import InfiniteScroll from "react-infinite-scroll-component";
import ProductCon from "../../components/ProductCon";



export default function ProductList({documents}) {
  return (
    <section className="product-list">
      <h1>product list</h1>
      <InfiniteScroll
        dataLength={documents.length}
        next={documents}
        hasMore={true}
        loader={<h4>Loading...</h4>}
      >
        <div className="product-listcon">
          {documents.map((doc, index) => (
            <ProductCon key={index}
              imageSrc={doc.api_featured_image}
              productname={doc.name}
              productamount={doc.price}
              ratings={doc.rating}
              productid={doc.id}
              category={doc.category}
            />
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
}
