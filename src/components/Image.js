import React from 'react'

export default function Image({imageSrc,alt,className,onclick}) {
  return (
    <img
      src={imageSrc}
      alt={`${alt}`}
      className={className}
      onClick={onclick}
    />
  );
}
