const ImageItem = ({ data }) => {
  return (
    <article>
      <div className="aspect-square">
        <img src={data.image} alt={data.title} loading="lazy" className="h-full w-full object-cover object-center" />
      </div>
    </article>
  );
};

export default ImageItem;
