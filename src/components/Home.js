import React, { useRef, useState } from "react";
import ChildHome from "./ChildHome";

const App = () => {
  console.log("I am Parent");

  const nameRef = useRef();

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col">
      <input className="border-2" ref={nameRef} />
      <ChildHome handleClick={handleClick} />
    </div>
  );
};
export default App;
