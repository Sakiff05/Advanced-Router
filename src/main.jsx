import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import SearchProvider from "./context/SearchProvider.jsx";
import FavoriteProvider from "./context/FavoriteProvider.jsx";
import BasketProvider from "./context/BasketProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BasketProvider>
    <FavoriteProvider>
      <SearchProvider>
        <App />
      </SearchProvider>
    </FavoriteProvider>
  </BasketProvider>
);
