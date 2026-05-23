import React from "react";
import { useState } from "react";
import { use } from "react";

export const InPageNavigation = ({ teams, children }) => {
  console.log(teams);
  const [index, setIndex] = useState(0);
  return (
    <>
      {teams.map((team, i) => (
        <button className="btn" key={team} onClick={() => setIndex(i)}>
          {team}
        </button>
      ))}
      {children[index]}
      {/* //default value of index is 0 so it will show the first child by default */}
    </>
  );
};
