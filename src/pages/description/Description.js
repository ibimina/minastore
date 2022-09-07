//style
import "./description.css";

//get params router import
import { useParams } from "react-router-dom";

//fetch hook
import { useFetch } from "../../hooks/useFetch";

// page components
import Goback from "../../components/Goback";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Extras from "../../components/Extras";
import Describe from "../../components/Describe";

export default function Description() {
  const { id } = useParams();
  const query =
    "https://makeup-api.herokuapp.com/api/v1/products/" + id + ".json";
  const { documents, isPending, error } = useFetch(query);
  return (
    <>
      <div className="desc-con">
        <Goback />
        {error && <Error />}
        {isPending && <Loading />}
        {documents && (
          <>
            <Describe documents={documents} id={id} />
            <Extras producttype={documents.product_type} />
          </>
        )}
      </div>
    </>
  );
}
