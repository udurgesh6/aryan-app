import React from "react";
import { format } from "date-fns";

const Clock = ({ time }) => {
  console.log("I am a Clock Component");

  return (
    <div>
      <p className="text-xl font-bold text-center">
        {format(time, "hh:mm:ss")}
      </p>
    </div>
  );
};

export default Clock;
