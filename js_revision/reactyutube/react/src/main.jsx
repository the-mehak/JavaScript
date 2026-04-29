import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
let shoesdata = [
  {
    title: "nike",
    price: 5000,
  },
  {
    title: "puma",
    price: 9000,
  },
  {
    title: "adidas",
    price: 10000,
  },
  {
    title: "Skechers",
    price: 15000,
  },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App shoesdata={shoesdata} />
  </StrictMode>,
);
