import React from 'react'
import Image from './Image';

export default function Loading() {
  return (
    <>

      <Image
        imageSrc={process.env.PUBLIC_URL + "/images/lip.svg"}
        alt="loading icon"
        className="load"
      />
    </>
  );
}
