import React, { useState } from "react";
import { ButtonCSR, TypographyCSR } from "design-system/components/index.js";

const Counter = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);

  const handleIncrement = () => setCount((prev) => prev + 1);

  return (
    <div>
      <TypographyCSR variant="h2">Dynamic Counter</TypographyCSR>
      <TypographyCSR variant="p">Current count: {count}</TypographyCSR>
      <ButtonCSR type="primary" onClick={handleIncrement}>
        Increment
      </ButtonCSR>
    </div>
  );
};

export default Counter;