import React, { useState } from "react";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      <h2>Dynamic Counter</h2>
      <p>Current count: {count}</p>
      <button className="btn-primary" onClick={handleIncrement}>
        Increment
      </button>
    </div>
  );
};

export default Counter;