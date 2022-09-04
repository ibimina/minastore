import { Link } from "react-router-dom";

function ProductNavList({ imageSrc, caption, onha, handle ,handleclick}) {
  const handlepage = () => {
    handleclick();
    onha();
    handle(); 
  };
  return (
    <Link to={`/products/${caption}`} onClick={handlepage}>
      <figure className="prodimg-con">
        <img src={imageSrc} alt={`${caption} navigation`} className="sub-img" />
        <figcaption>{caption}</figcaption>
      </figure>
    </Link>
  );
}

export default ProductNavList;
