import React, { useState, useMemo } from "react";

const PrimeCalculator = () => {
  console.log("I am prime calculator");
  const [selectedNum, setSelectedNum] = useState(10);

  //   const allPrimes = useMemo(() => {
  //     const result = [];
  //     for (let counter = 2; counter < selectedNum; counter++) {
  //       console.log("Counter");
  //       if (isPrime(counter)) {
  //         result.push(counter);
  //       }
  //     }
  //     return result;
  //   }, [selectedNum]);

  const allPrimes = [];

  for (let counter = 2; counter < selectedNum; counter++) {
    console.log("Counter");
    if (isPrime(counter)) {
      allPrimes.push(counter);
    }
  }

  return (
    <div>
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

export default PrimeCalculator;
