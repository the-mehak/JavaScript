import React from "react";

const PropsDrilling = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      <h1>PropsDrilling</h1>
      <Grandparents />
    </div>
  );
};

const Grandparents = () => {
  return (
    <div style={{ border: "2px solid green", padding: "20px" }}>
      <h1>Grandparents</h1>
      <Parents />
    </div>
  );
};
const Parents = () => {
  return (
    <div style={{ border: "2px solid red", padding: "20px" }}>
      <h1>Parents</h1>
      <Child />
    </div>
  );
};
const Child = () => {
  return (
    <div style={{ border: "2px solid blue", padding: "20px" }}>
      {" "}
      <h1>Child</h1>
    </div>
  );
};

export default PropsDrilling;
