import InfiniteScroll from "react-infinite-scroll-component";
import ProductCon from "../../components/ProductCon";



export default function ProductList({documents}) {
const fetchData=()=>{
 return documents
}

  return (
    <section className="product-list">
      <h2 className="top-text">Product list</h2>
      <InfiniteScroll
        dataLength={documents.length}
        next={fetchData}
        hasMore={true}
        loader={<h4> Yay! You have seen it all</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>Yay! You have seen it all</p>
        }
      >
        <div className="product-listcon">
          {documents.map((doc, index) => (
            <ProductCon
              key={index}
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
      </InfiniteScroll>
    </section>
  );
}
