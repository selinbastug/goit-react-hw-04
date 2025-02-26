import ReactModal from "react-modal";

function ImageModal({ isOpen, onRequestClose, selectedImage }) {
  if (!selectedImage) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <div className="position-relative">
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0"
          aria-label="Close"
          onClick={onRequestClose}
        ></button>

        <div>
          <img
            src={selectedImage.urls.regular}
            className="img-thumbnail p-4"
            alt="image"
          />
        </div>
      </div>
    </ReactModal>
  );
}

export default ImageModal;
