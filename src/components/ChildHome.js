import React, { memo } from "react";

const ChildHome = ({ handleClick }) => {
  console.log("hello world I am ChildHome Component");

  return (
    <>
      <button onClick={handleClick}>Add From Child</button>
    </>
  );
};

export default memo(ChildHome);
