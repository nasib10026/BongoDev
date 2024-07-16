import React, { useState, useEffect } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count === 0) {
      alert("Count cannot be less than zero");
      return;
    }
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(initialCount);
  };

  useEffect(() => {
    console.log(`Counter with initial count ${initialCount}: useEffect 1 is executing....`);
  }, [count]);

  useEffect(() => {
    console.log(`Counter with initial count ${initialCount}: useEffect 2 is executing....`);
  }, []);

  return (
    <div>
      <div>Count is: {count}</div>
      <div className="buttons">
        <button onClick={increaseCount}>+</button>
        <button onClick={resetCount}>reset</button>
        <button onClick={decreaseCount}>-</button>
      </div>
    </div>
  );
};

export default Counter;
