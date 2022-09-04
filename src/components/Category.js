import { Link } from "react-router-dom";

export default function Category({ doc, hand, handle }) {
  const handleClick = (e) => {
    let arrow = e.target.parentNode;
    if (arrow.className.includes("arrow")) {
      let subColl = arrow.parentNode.nextSibling;
      let visible = arrow.parentNode.nextSibling.getAttribute("data-visible");

      if (visible === "false") {
        subColl.setAttribute("data-visible", true);
        arrow.setAttribute("aria-pressed", true);
      } else {
        subColl.setAttribute("data-visible", false);
        arrow.setAttribute("aria-pressed", false);
      }
    }
  };
  const handlepage = (e) => {
      e.target.parentNode.parentNode.parentNode.previousSibling.children[1].setAttribute(
        "aria-pressed",
        false
      );
    e.target.parentNode.parentNode.parentNode.setAttribute(
      "data-visible",
      false
    );
    handle();
    hand(); 
  };
  return (
    <li className="list">
      <div className="container">
        <p> {doc.bodyproduct}</p>
        <figure
          className="arrow"
          onClick={(e) => handleClick(e)}
          aria-pressed="false"
        >
          <img src={doc.image} alt="arrow down icon" />
        </figure>
      </div>

      <ul className="part" data-visible="false">
        {doc.subproduct.map((sub) => (
          <Link
            to={`/products/${sub.name}`}
            key={sub.name}
            onClick={handlepage}
          >
            <figure className="prodimg-con">
              <img
                src={sub.images}
                alt={`${sub.name} navigation`}
                className="sub-img"
              />
              <figcaption>{sub.name}</figcaption>
            </figure>
          </Link>
        ))}
      </ul>
    </li>
  );
}

