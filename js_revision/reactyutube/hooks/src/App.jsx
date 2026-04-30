import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(0);
  function increase() {
    setCount((count) => {
      return count + 1;
    });
  }
  function decrease() {
    setCount((count) => {
      return count - 1;
    });
  }
  return (
    <>
      <h1>Counter</h1>
      <button onClick={increase}>Increase</button>
      <h2>{count}</h2>
      <button onClick={decrease}> Decrease</button>
    </>
  );
}

export default App;
