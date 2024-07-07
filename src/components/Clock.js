import React, { useEffect, useState } from "react";
import { format } from "date-fns";

const Clock = () => {
  console.log("I am a Clock Component");
  const time = useTime();

  return (
    <div>
      <p className="text-xl font-bold text-center">
        {format(time, "hh:mm:ss")}
      </p>
    </div>
  );
};

function useTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      window.clearInterval(intervalId);
    };
  }, []);

  return time;
}

export default Clock;
