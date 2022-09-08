import React from 'react'
import { useFetch } from '../hooks/useFetch';
import Error from './Error';
import Loading from './Loading';
import ProductCon from './ProductCon';

export default function Section({q,title}) {
      const query =
        "https://makeup-api.herokuapp.com/api/v1/products.json?"+q;
      const { documents, isPending, error } = useFetch(query);

      if (documents === null) {
        <>No docs</>;
      }
  return (
    <section className="top-rank">
      <h2 className="top-rank">{title}</h2>
      {error && <Error />}
      
      {isPending && <Loading />}
      <div className="ranks">
        {documents &&
          documents
            .slice(0, 12)
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
