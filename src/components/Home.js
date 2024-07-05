import React, { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";

const App = () => {
  const [selectedNum, setSelectedNum] = useState(10);

  const time = useTime();

  // const allPrimes = [];

  // for (let counter = 2; counter < selectedNum; counter++) {
  //   console.log("Counter");
  //   if (isPrime(counter)) {
  //     allPrimes.push(counter);
  //   }
  // }

  const allPrimes = useMemo(() => {
    const result = [];
    for (let counter = 2; counter < selectedNum; counter++) {
      console.log("Counter");
      if (isPrime(counter)) {
        result.push(counter);
      }
    }
    return result;
  }, [selectedNum]);

  return (
    <div className="flex flex-col">
      <p className="text-xl font-bold text-center">
        {format(time, "hh:mm:ss")}
      </p>
      <input
        className="border border-black mt-20"
        value={selectedNum}
        onChange={(e) => setSelectedNum(e.target.value)}
      />
      <p>
        There are {allPrimes.length} primes between 1 and {selectedNum}
      </p>
      <p>{allPrimes.join(", ")}</p>
    </div>
  );
};

function isPrime(number) {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

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

export default App;
