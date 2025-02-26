import { useState } from "react";
// import ReactModal from 'react-modal';
// import { Toaster, toast } from 'react-hot-toast';
//CSS
import styles from "./App.module.css";
//Components
import SearchBar from "./components/SearchBar";
import Title from "./components/Title";
import ImageGallery from "./components/ImageGallery";
import ImageModal from "./components/ImageModal";
import fetchData from "./js/fetchData";
import LoadMoreButton from "./components/LoadMoreButton";
import GoUpsideButton from "./components/GoUpsideButton";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";
import Footer from "./components/Footer";

function App() {
  const [picture, setPicture] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loaders, setLoaders] = useState(false);
  const [error, setError] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="bg-primary p-2 border-bottom border-dark border-4 shadow-lg d-flex flex-column flex-sm-row align-items-center justify-content-between position-fixed top-0 w-100">
        <div className="">
          <Title />
        </div>
        <div className="d-flex mt-3">
          <SearchBar
            search={search}
            setSearch={setSearch}
            fetchData={fetchData}
            setPicture={setPicture}
            setLoaders={setLoaders}
            setError={setError}
          />
        </div>
        <div className={styles.spacer}></div>
      </div>
      {loaders && <Loader />}
      <div style={{ marginTop: "120px" }}>
        <ImageGallery picture={picture} onImageClick={handleOpenModal} />
      </div>
      {picture.length > 0 && (
        <LoadMoreButton
          page={page}
          setPage={setPage}
          search={search}
          setPicture={setPicture}
        />
      )}

      <GoUpsideButton />
      {error && <ErrorMessage />}
      <ImageModal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        selectedImage={selectedImage}
      />
      <Footer />
    </>
  );
}

export default App;
