function ImageCard({ picture, onImageClick }) {
  return (
    <div className="container" style={{ maxWidth: "1200px" }}>
      <div className="row">
        {picture.map((item, index) => (
          <div
            key={index}
            className="col-12 col-sm-4 col-lg-3 d-flex align-items-center justify-content-center"
          >
            <img
              src={item.urls.regular}
              className="img-thumbnail"
              alt={`image-${index}`}
              onClick={() => onImageClick(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageCard;
