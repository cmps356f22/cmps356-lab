import { useState, useMemo, useEffect, useDeferredValue } from "react";

const Input = () => {
  const [text, setText] = useState();
  const [number, setNumber] = useState(1);
  const [slider, setSlider] = useState(0);
  const deferredSlider = useDeferredValue(slider);
  // const [testNumber, setTestNumber] = useState(1);

  const isPrime = (n) => {
    return (
      n > 1 &&
      !Array.from({ length: n - 2 }, (_, i) => i + 2).find((i) => n % i === 0)
    );
  };

  const prime = (n) => {
    console.log("prime!");

    let count = 0;
    let k = 1;

    while (true) {
      if (isPrime(k)) {
        count++;
      }
      k++;

      if (count === n) {
        return k;
      }
    }
  };

  useEffect(() => {
    isPrime(10000000);
    console.log("change");
  }, [deferredSlider]);

  const cprime = useMemo(() => prime(number), [number]);
  // const cprime = prime(500);

  return (
    <div
      style={{
        backgroundColor: "#" + ((Math.random() * 0xffffff) << 0).toString(16),
        padding: "10px",
      }}
    >
      <div>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(Number(e.target.value))}
        />
        <input type="text" value={cprime} />
      </div>
      <div>
        <input
          type="range"
          min="0"
          max="10000"
          onChange={(e) => {
            setSlider(e.target.value);
          }}
        />
        {/* <input
          type="text"
          value={testNumber}
          onChange={(e) => {
            setTestNumber(e.target.value);
          }}
        />
        <input type="text" value={isPrime(testNumber)} /> */}
      </div>
    </div>
  );
};

export { Input };
