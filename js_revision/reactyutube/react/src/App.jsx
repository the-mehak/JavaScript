import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
// import "./App.css";
import Product from "./components/Product";

function App({ shoesdata }) {
  return (
    <>
      {shoesdata.map((data, index) => {
        return <Product key={index} title={data.title} price={data.price} />;
      })}
    </>
  );
}

export default App;
