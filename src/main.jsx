import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import GlobalContext from "./GlobalContext.jsx";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

createRoot(document.getElementById("root")).render(
  <GlobalContext>
    <App />
  </GlobalContext>
);
