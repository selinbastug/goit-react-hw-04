import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//Modern Normalize
import "modern-normalize/modern-normalize.css";
import App from "./App.jsx";
//Import SASS
import "./custom.scss";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
