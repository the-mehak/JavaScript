import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { Allcards } from "./components/Allcards";
import { data } from "./utiles/data";

function App() {
  let [value, setValue] = useState("");
  let [filterData, setfilterData] = useState(data);
  function filterHandler() {
    let res = data.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setfilterData(res);
  }

  return (
    <>
      <h1 className="m-5 font-serif font-bold text-2xl">New Website</h1>
      <div className=" flex flex-wrap gap-5 justify-center px-5">
        <input
          type="text"
          placeholder="Enter item"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          className=" p-2  border border-white mb-3 rounded-xl "
        />
        <button class="btn-primary" onClick={filterHandler}>
          Search
        </button>
      </div>
      <Allcards data={filterData} />
    </>
  );
}

export default App;
