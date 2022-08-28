function ProductNavList({imageSrc,caption}) {
  return (
    <figure>
      <img src={imageSrc} alt={`${caption} picture`} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default ProductNavList;
