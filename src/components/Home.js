import React, { useEffect, useState } from "react";
import Clock from "./Clock";
import PrimeCalculator from "./PrimeCalculator";
import { getSeconds } from "date-fns";

const Home = () => {
  const time = useTime();

  const backgroundColor = getBackgroundColorFromTime(time);

  return (
    <div className="flex flex-col" style={{ backgroundColor }}>
      <Clock time={time} />
      <PrimeCalculator />
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

const getBackgroundColorFromTime = (time) => {
  const hours = getSeconds(time);

  if (hours < 20) {
    return "hsl(50deg 100% 90%)";
  } else if (hours < 40) {
    return "hsl(220deg 60% 92%)";
  } else {
    return "hsl(220deg 100% 80%)";
  }
};

export default Home;
