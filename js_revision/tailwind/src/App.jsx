import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div class=" bg-amber-300 w-screen h-screen  wrapper flex items-center justify-center    ">
        <div class="bg-white w-96 min-h-[30rem] rounded-3xl wrapper flex-col justify-between items-start  p-3 overflow-hidden ">
          <img
            class="rounded-2xl hover:scale-110 duration-700"
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%2Fid%2FOIP.2dRQRZ7aFBmmqXP6CEbMhgHaEo%3Fpid%3DApi&f=1&ipt=f9b0291fbc4894b43f5aae75a89bfebb3a88faffac834032cbb73cdd2e5b5c0c&ipo=images"
          ></img>
          <p class="p-2 text-m text-justify">
            Varanasi, or Kashi, is a city on the Ganges river in northern India
            that has a central place in the traditions of pilgrimage, death, and
            mourning in the Hindu world. The city has a syncretic tradition of
            Islamic artisanship that underpins its religious tourism.
          </p>
          <button class="bg-red-400 rounded-2xl w-25 h-10 m-1 hover:bg-green-300 duration-700">
            Read more...
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
