import React from 'react'
import Image from "./Image";
export default function Error() {
  return (
    <>
      <p className="error-msg">Ooops server down</p>
      <Image
        imageSrc={process.env.PUBLIC_URL + "/images/error.webp"}
        alt="error icon"
        className="error"
      />
    </>
  );
}
