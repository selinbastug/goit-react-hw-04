import fetchData from "../js/fetchData";

function LoadMoreButton({ page, setPage, search, setPicture }) {
  const handlePage = async () => {
    const newPage = page + 1;
    setPage(newPage);
    const newPictures = await fetchData(search, newPage);
    setPicture((prevPictures) => [...prevPictures, ...newPictures]);
    //scrool
    setTimeout(() => {
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }, 160);
  };

  return (
    <div className="d-flex align-items-center justify-content-center mt-4">
      <button
        onClick={handlePage}
        className="btn btn-primary px-4 py-2"
        style={{ marginBottom: "60px" }}
      >
        Load More
      </button>
    </div>
  );
}

export default LoadMoreButton;
