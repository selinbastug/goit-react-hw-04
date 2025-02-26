import styles from "../App.module.css";
import toast from "react-hot-toast";

function SearchBar({
  search,
  setSearch,
  fetchData,
  setPicture,
  setLoaders,
  setError,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) {
      toast.error(
        "The search field cannot be empty. Please provide a valid term to search."
      );
      setError(true);
      return;
    }

    setLoaders(true);
    const images = await fetchData(search);
    setPicture(images);
    setLoaders(false);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchDelete = () => {
    setSearch("");
    setPicture([]);
    setLoaders(false);
    setError(false);
    toast.success("Search term cleared successfully.");
  };

  return (
    <form className="input-group mb-3" onSubmit={handleSubmit}>
      <input
        type="text"
        name="search"
        className={`form-control ${styles.input}`}
        placeholder="Search"
        aria-label="search"
        value={search}
        onChange={handleSearchChange}
      />
      {search && (
        <button
          className="btn btn-white"
          type="button"
          id="button-addon2"
          onClick={handleSearchDelete}
        >
          <i className="bi bi-x-octagon text-danger"></i>
        </button>
      )}
      <button className="btn btn-white" type="submit" id="button-addon2">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
}

export default SearchBar;
