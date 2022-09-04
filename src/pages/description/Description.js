//style
import "./description.css";

//get params router import
import { useParams } from "react-router-dom";

//fetch hook
import { useFetch } from "../../hooks/useFetch";

// page components
import Goback from "../../components/Goback";
import GetColors from "../../components/GetColors";
import Image from "../../components/Image";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Extras from "../../components/Extras";

export default function Description() {
  const { id } = useParams();
  const query = "https://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";

  const { documents, isPending, error } = useFetch(query);
 
  return (
    <>
      <div className="desc-con">
        <Goback />
        {error && <Error />}
        {isPending && <Loading />}

        {documents && (
          <>
            <h1>
              <span>{documents.brand}</span> {documents.product_type}
            </h1>
            <div className="des-d">
              <Image
                imageSrc={documents.api_featured_image}
                alt={documents.name}
                className="descimg"
              />
              <div>
                <GetColors documents={documents} id={id} />
              </div>
            </div>
            <p>
              tags:{" "}
              {documents.tag_list.join(",")
                ? documents.tag_list.join(",")
                : "no tag avaliable"}
            </p>
            <p>Description: {documents.description}</p>
            <Extras producttype={documents.product_type} />
          </>
        )}
      </div>
    </>
  );
}
