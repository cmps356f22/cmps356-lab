import { useState, useEffect } from 'react';

function Clock(props) {
  const [date, setDate] = useState(new Date());
  const [offset, setOffset] = useState(Number(props.offset) ?? 0);

  const tickClock = () => {
    setDate(new Date());
    console.log('tick tock');
  };

  const incrementOffset = () => {
    setOffset(offset + 0.5);
  };

  const decrementOffset = () => {
    setOffset(offset - 0.5);
  };

  useEffect(() => {
    setInterval(tickClock, 1000);
  }, []);

  useEffect(() => {
    console.log('date changed');
  }, [date]);

  useEffect(() => {
    console.log('offset changed');
  }, [offset]);

  return (
    <div>
      <div>
        {new Date(date.getTime() + offset * 60 * 60 * 1000).toLocaleString()}
      </div>
      <div>
        <button onClick={incrementOffset}>+</button>
        <button onClick={decrementOffset}>-</button>
      </div>
      <div>{offset}-hour difference.</div>
    </div>
  );
}

export default Clock;
