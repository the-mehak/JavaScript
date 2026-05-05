import { useState } from "react";

function UseState() {
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
      <div className="flex flex-row">
        <button onClick={increase} className="font-serif text-sky-400">
          Increase
        </button>
        <h3>{count}</h3>
        <button onClick={decrease}>Decrease</button>
      </div>
    </>
  );
}

export default UseState;
