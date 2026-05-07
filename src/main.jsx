import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import { CartProvider } from "./components/context/CartContext";
import { HashRouter } from "react-router-dom";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <React.StrictMode>
      <CartProvider>
        <App />
      </CartProvider>
    </React.StrictMode>
  </HashRouter>
);
