import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalContext from "./GlobalContext.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <ToastContainer position="top-right" autoClose={2000} theme="colored" />
    <App />
  </GlobalContext>
);
