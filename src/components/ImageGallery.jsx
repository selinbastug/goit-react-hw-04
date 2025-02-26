import ImageCard from "./ImageCard";

function ImageGallery({ picture, onImageClick }) {
  return (
    <div className="container mt-4">
      <div className="row">
        <ImageCard picture={picture} onImageClick={onImageClick} />
      </div>
    </div>
  );
}

export default ImageGallery;
