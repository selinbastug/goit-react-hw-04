import axios from "axios";
// client_id: 'gK52De2Tm_dL5o1IXKa9FROBAJ-LIYqR41xBdlg3X2k',
const API_KEY = "-SHAWhLl0zPd49IXyqUxrf7pvZ9-Q1H6f5xHB5BDImM";
const BASE_URL = "https://api.unsplash.com/search/photos";

const fetchData = async (seachQuerry, page = 1) => {
  const params = {
    query: seachQuerry,
    // query: 'apple',
    per_page: 16,
    client_id: API_KEY,
    page: page,
    orientation: "landscape",
    order_by: "relevant",
  };
  try {
    const response = await axios.get(BASE_URL, { params });
    const images = response.data.results;
    return images;
  } catch (error) {
    console.error(error);
  }
};

export default fetchData;
