import React from "react";
import GetColors from "./GetColors";
import Image from "./Image";

export default function Describe({ documents,id }) {
  return (
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
    </>
  );
}
