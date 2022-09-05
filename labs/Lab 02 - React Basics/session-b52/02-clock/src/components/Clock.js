import { useState, useEffect } from 'react';

function Clock(props) {
  const [date, setDate] = useState(new Date());
  const [offset, setOffset] = useState(Number(props.offset ?? 0));

  const tick = () => {
    setDate(new Date());
    // setDate(new Date(Date.now() + offset * 60 * 60 * 1000));
    console.log('tick tock');
  };

  const incrementOffset = () => {
    setOffset(offset + 0.5);
  }

  const decrementOffset = () => {
    setOffset(offset - 0.5);
  }

  useEffect(() => {
    setInterval(tick, 1000);
    // return () => { clearInterval(timerID) };
  }, []);

  useEffect(() => {
    console.log('date updated:', date);
  }, [date]);

  useEffect(() => {
    console.log('offset updated:', offset);
  }, [offset]);

  return (
    <div className="clock">
      {/* <div>{date.toLocaleString()}</div> */}
      <h2>{props.title}</h2>
      <div>{new Date(date.getTime() + offset * 60 * 60 * 1000).toLocaleString()}</div>
      <div>
        <button onClick={incrementOffset}>+</button>
        <button onClick={decrementOffset}>-</button>
      </div>
      <div>{offset}-hour offset.</div>
    </div>
  );
}

export default Clock;
