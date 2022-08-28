import { useNavigate, useParams } from "react-router-dom";

import { useFetch } from "../hooks/useFetch";

export default function Description() {
 
  const { id } = useParams();
  const navigate = useNavigate();
  //   console.log(doc);
  const query =
    "https://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";

  const { documents, isPending, error } = useFetch(query);
  const GetStars = () => {
    let stars = [];
    for (let i = 0; i < documents.rating; i++) {
      stars.push(i);
    }
    return (
      <>
        {stars.map((index) => (
          <img src={process.env.PUBLIC_URL + "/images/star.png"} key={index} alt="product star ratings icon"/>
        ))}
      </>
    );
  };

  return (
    <div>
      <button onClick={() => navigate(-1)}>
        <span className="sr-only">back</span>
      </button>
      <img
        src={process.env.PUBLIC_URL + "/images/icon-arrow-down.svg"}
        alt=""
      />
      {error && <>error...</>}
      {isPending && <> loading...</>}
      {documents && (
        <>
          <h1>
            <span>{documents.brand}</span> {documents.product_type}
          </h1>

          <img src={documents.api_featured_image} alt="" />

          <p> {documents.name}</p>
          <p>{documents.price}</p>
          <div>
            <p>{documents.rating}</p>
            <GetStars />
          </div>

          <div>
            {documents.product_colors.map((color, index) => (
              <div key={index}>
                <button
                  style={{ backgroundColor: color.hex_value }}
                  key={color.hex_value}
                >
                  <span className="sr-only">{color.colour_name}</span>
                </button>
                <p>{color.colour_name}</p>
              </div>
            ))}
            <div>
              <div>
                <p>plus</p> <p>0</p> <p>minus</p>
              </div>
              <div>cart button</div>
            </div>
          </div>
          <p>{documents.description}</p>
        </>
      )}
    </div>
  );
}
