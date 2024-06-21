import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  const incrementCount = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log(count);
    if (count % 2 === 0) {
      alert(`Hello the count is ${count}`);
    }
  }, [1]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default App;
