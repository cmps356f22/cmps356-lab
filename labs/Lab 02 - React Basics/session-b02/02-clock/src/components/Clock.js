import { useState, useEffect } from 'react';

function Clock(props) {
  const [date, setDate] = useState(new Date());
  const [offset, setOffset] = useState(Number(props.offset ?? 0));
  // props.title = "Goodbye";

  useEffect(() => {
    // console.log("mounted");
    setInterval(tick, 1000);
  }, []);

  useEffect(() => {
    console.log('date updated:', date);
  }, [date]);

  useEffect(() => {
    console.log('offset updated:', offset);
  }, [offset]);

  const tick = () => {
    setDate(new Date());
    // console.log("offset in tick:", offset);
    // setDate(new Date(Date.now() + offset * 60 * 60 * 1000));
  };

  const increment = () => {
    setOffset(offset + 0.5);
  }

  const decrement = () => {
    setOffset(offset - 0.5);
  }

  return (
    <div>
      <h2>{props.title ?? "Untitled"}</h2>
      <div>{new Date(date.getTime() + offset * 60 * 60 * 1000).toLocaleString()}</div>
      <div>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
      <div>{offset}-hour offset.</div>
    </div>
  );
}

export default Clock;
