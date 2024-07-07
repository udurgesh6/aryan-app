import React from "react";
import Clock from "./Clock";
import PrimeCalculator from "./PrimeCalculator";

const App = () => {
  return (
    <div className="flex flex-col">
      <Clock />
      <PrimeCalculator />
    </div>
  );
};

export default App;
