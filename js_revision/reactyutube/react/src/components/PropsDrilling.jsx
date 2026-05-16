import React from "react";
import UserContext from "./utilites/Context";

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
    <UserContext.Consumer>
      {(user) => (
        <div style={{ border: "2px solid blue", padding: "20px" }}>
          <h1>Child</h1>
          <p>Name : {user?.name}</p>
          <p>Age : {user?.age}</p>
        </div>
      )}
    </UserContext.Consumer>
  );
};

export default PropsDrilling;
