import { useState, useMemo } from "react";

const Playground = ({ value }) => {
  const [ipsum, setIpsum] = useState("");

  const wait = (value, duration) => {
    const date = Date.now();
    while (Date.now() - date < duration);
    return value;
  };

  return (
    <>
      <div
        style={{
          padding: "10px",
          backgroundColor:
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
        }}
      >
        <div>
          <input
            type="text"
            value={ipsum}
            onChange={(e) => {
              setIpsum(e.target.value);
            }}
          />
        </div>
        <div>
          <input
            type="text"
            readOnly
            value={useMemo(() => wait(value(), 100), [value])}
          />
        </div>
      </div>
    </>
  );
};

export { Playground };
