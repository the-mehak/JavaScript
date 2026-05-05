import { use, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Allcards } from "./components/Allcards";
// import { data } from "./utiles/data";

function App() {
  let [value, setValue] = useState("");
  let [products, setProducts] = useState([]);
  let [filterData, setfilterData] = useState([]);
  async function fetchdata() {
    let res1 = await fetch("https://dummyjson.com/products");
    let result = await res1.json();
    setProducts(result.products);
    setfilterData(result.products);
  }

  useEffect(() => {
    fetchdata();
  }, []);

  function filterHandler() {
    let res = products.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setfilterData(res);
  }

  return (
    <>
      <h1 className="m-5 font-serif font-bold text-2xl ">Product Searching</h1>
      <div>
        <input
          type="text"
          placeholder="Enter item"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className=" p-3 border border-white mb-3 rounded-tl-3xl rounded-l-3xl w-2/4 "
        />
        <button
          className=" p-3 border border-white mb-3 rounded-tr-3xl rounded-br-3xl bg-purple-400 font-serif w-1/5 "
          onClick={filterHandler}
        >
          Search
        </button>
      </div>
      {filterData.length <= 0 ? (
        <h1 text-6xl="true">No Item</h1>
      ) : (
        <Allcards data={filterData} />
      )}
    </>
  );
}

export default App;
