import { useState, useMemo } from "react";

const Input = ({ value }) => {
  const [text, setText] = useState();

  const wait = (value, duration) => {
    console.log("wait");

    const date = Date.now();
    let current = null;
    do {
      current = Date.now();
    } while (current - date < duration);
    return value;
  };

  const wValue = useMemo(() => {
    return wait(value, 100);
  }, [value]);

  return (
    <div
      style={{
        backgroundColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
        padding: "10px",
      }}
    >
      <input
        type="text"
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <input type="text" value={wValue} />
    </div>
  );
};

export { Input };
